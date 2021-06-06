import React, {Component} from 'react';
import './Home.css';
import Header from '../../common/header/Header';
import {withStyles} from '@material-ui/core/styles';
import moviesData from '../../common/movieData';
import genres from '../../common/genres';
import artists from '../../common/artists';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { Button, Checkbox, ListItemText, TextField } from '@material-ui/core';

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
    },
    upcomingMoviesHeading: {
        textAlign: 'center',
        background: '#ff9999',
        padding: '8px',
        fontSize: '1rem'
    },
    gridListUpcomingMovies: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
        width: '100%'
    },
    gridListMain: {
        transform: 'translateZ(0)',
        cursor: 'pointer'
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 240,
        maxWidth: 240
     },
     title: {
        color: theme.palette.primary.light,
     }
 });



class Home extends Component {

    constructor() {
        super();
        this.state = {
            moviename : "",
            upcomingMovies :[{}],
            releasedMovies :[{}],
            genres : [],
            artists : []
        }
    }

    componentDidMount () {
        let data= null;
        let xhr = new XMLHttpRequest();
        let that = this;
        xhr.addEventListener('readystatechange', function() {
            if (this.readyState == 4) {
                that.setState({upcomingMovies : JSON.parse(this.responseText)});
            }
        })

        xhr.open("GET", this.props.baseurl + "movies?status=PUBLISHED");
        xhr.setRequestHeader("Cache-Control","no-cache");
        xhr.send(data)

        let xhrreleased = new XMLHttpRequest();
        xhrreleased.addEventListener('readystatechange', function() {
            if (this.readyState == 4) {
                that.setState({releasedMovies : JSON.parse(this.responseText)});
            }
        })
        // currently we dont have data with released so using same PUBLISHED
        xhrreleased.open("GET", this.props.baseurl + "movies?status=PUBLISHED");
        xhrreleased.setRequestHeader("Cache-Control","no-cache");
        xhrreleased.send(data)
    }

    movieNameChangeHandler = (e) => {
        this.setState({moviename : e.target.value});
    }

    genreSelectChangeHandler = (e) => {
        this.setState({genres: e.target.value})
    }

    artistSelectChangeHandler = (e) => {
        this.setState({artists: e.target.value})
    }

    movieClickHandler = (movieid) => {
        this.props.history.push('/movie/' + movieid);
    }

    render () {
        const {classes} = this.props;
        return (
            <div>
                <Header />
                <div className={classes.upcomingMoviesHeading}>
                <span className="um-heading">Upcoming Movies</span>
            </div>
            <GridList cols={5} className={classes.gridListUpcomingMovies}>
                {this.state.upcomingMovies.map(movie => (
                    <GridListTile key={"upcoming" + movie.id}>
                        <img src={movie.poster_url} className="movie-poster" alt={movie.title}/>
                        <GridListTileBar title={movie.title}/>
                    </GridListTile>
                ))}
            </GridList>
            <div className="flex-container">
                    <div className="left">
                        <GridList cellHeight={350} cols={4} className={classes.gridListMain}>
                            {this.state.releasedMovies.map(movie => (
                                <GridListTile onClick={() => this.movieClickHandler(movie.id)} className="released-movie-grid-item" key={"grid" + movie.id}>
                                    <img src={movie.poster_url} className="movie-poster" alt={movie.title} />
                                    <GridListTileBar
                                        title={movie.title}
                                        subtitle={<span>Release Date: {new Date(movie.release_date).toDateString()}</span>}
                                    />
                                </GridListTile>
                            ))}
                        </GridList>
                    </div>
                    <div className="right">
                        <Card>
                            <CardContent>
                                <FormControl className={classes.formControl}>
                                    <Typography className={classes.title} title="textSecondary">
                                        FIND MOVIES BY:
                                    </Typography>
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="moviename">Movie Name</InputLabel>
                                    <Input id="moviename" type="text" onChange={this.movieNameChangeHandler}/>
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="select-multiple-checkbox">Genre</InputLabel>
                                    <Select multiple 
                                        input={<Input id="select-multiple-checkbox"/>}
                                        renderValue={selected => selected.join(',')}
                                        value={this.state.genres}
                                        onChange={this.genreSelectChangeHandler}>
                                        {genres.map(genre => (
                                            <MenuItem value={genre.name} key={genre.id}>
                                                <Checkbox checked={this.state.genres.indexOf(genre.name) > -1} />
                                                <ListItemText primary={genre.name} />
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="select-multiple-checkbox-artist">Artists</InputLabel>
                                    <Select
                                        multiple
                                        input={<Input id="select-multiple-checkbox-artist" />}
                                        renderValue={selected => selected.join(',')}
                                        value={this.state.artists}
                                        onChange={this.artistSelectChangeHandler}>
                                        {artists.map(artist => (
                                            <MenuItem key={artist.id} value={artist.first_name + " " + artist.last_name}>
                                                <Checkbox checked={this.state.artists.indexOf(artist.first_name + " " + artist.last_name) > -1} />
                                                <ListItemText primary={artist.first_name + " " + artist.last_name} />
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <TextField id="releaseDateStart" label="Release Date Start" 
                                    type="date" defaultValue="" InputLabelProps={{shrink : true}}/>
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <TextField id="releaseDateEnd" label="Release Date End" 
                                    type="date" defaultValue="" InputLabelProps={{shrink : true}}/>
                                </FormControl>
                                <br /><br />
                                <FormControl className={classes.formControl}>
                                    <Button variant="contained" color="primary">
                                        APPLY
                                    </Button>
                                </FormControl>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Home);