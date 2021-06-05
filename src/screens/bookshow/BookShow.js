import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from '../../common/header/Header';
import Home from '../home/Home';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import language from '../../common/language';
import location from '../../common/location';
import showDate from '../../common/showDate';
import showTime from '../../common/showTime';
import CardContent from '@material-ui/core/CardContent';
import './BookShow.css';
import { Button, FormControl, Input, InputLabel, MenuItem, Select } from '@material-ui/core';

class BookShow extends Component {

    constructor() {
        super();
        this.state = {
            location : "",
            language : "",
            showDate : "",
            showTime : "",
            tickets : 0,
            unitPrice : 500,
            availableTickets : 20
        }
    }

    backToMovieDetailsHandler = () => {
        ReactDOM.render(<Home />, document.getElementById('root'));
    }

    locationChangeHandler = (e) => {
        this.setState({location : e.target.value});
    }
    languageChangeHandler = (e) => {
        this.setState({language : e.target.value});
    }
    showTimeChangeHandler = (e) => {
        this.setState({showTime : e.target.value});
    }
    showdateChangeHandler = (e) => {
        this.setState({showDate : e.target.value});
    }
    ticketsChangeHandler = (e) => {
        this.setState({tickets : e.target.value});
    }

    render () {
        return (
            <div>
                <Header />
                <div className="back">
                    <Typography onClick={this.backToMovieDetailsHandler}>
                        &#60; Back to Movie Details
                    </Typography>
                </div>
                <Card className="cardStyle">
                    <CardContent>
                        <Typography variant="headline" component="h2">
                                BOOK SHOW
                        </Typography>
                        <FormControl required className="formControl">
                            <InputLabel htmlFor="location">Choose Location: </InputLabel>
                            <Select 
                                value={this.state.location}
                                onChange={this.locationChangeHandler}>
                                {location.map(loc => (
                                    <MenuItem key={"loc" + loc.id} value={loc.location}>{loc.location}</MenuItem>
                                ))}
                                </Select>
                        </FormControl>
                        <FormControl required className="formControl">
                            <InputLabel htmlFor="language">Choose Language: </InputLabel>
                            <Select 
                                value={this.state.language}
                                onChange={this.languageChangeHandler}>
                                {language.map(lang => (
                                    <MenuItem key={"lang" + lang.id} value={lang.language}>{lang.language}</MenuItem>
                                ))}
                                </Select>
                        </FormControl>
                        <FormControl required className="formControl">
                            <InputLabel htmlFor="showDate">Choose Show Date: </InputLabel>
                            <Select 
                                value={this.state.showDate}
                                onChange={this.showdateChangeHandler}>
                                {showDate.map(sd => (
                                    <MenuItem key={"sd" + sd.id} value={sd.showDate}>{sd.showDate}</MenuItem>
                                ))}
                                </Select>
                        </FormControl>
                        <FormControl required className="formControl">
                            <InputLabel htmlFor="showTime">Choose Show Time: </InputLabel>
                            <Select 
                                value={this.state.showTime}
                                onChange={this.showTimeChangeHandler}>
                                {showTime.map(st => (
                                    <MenuItem key={"st" + st.id} value={st.showTime}>{st.showTime}</MenuItem>
                                ))}
                                </Select>
                        </FormControl>
                        <FormControl required className="formControl">
                            <InputLabel htmlFor="tickets">Tickets: ({this.state.availableTickets} available)</InputLabel>
                            <Input id="tickets" value={this.state.tickets !==0 ? this.state.tickets : ""} onChange={this.ticketsChangeHandler}/>
                        </FormControl><br /> <br />
                        <Typography>
                            Unit Price: Rs. {this.state.unitPrice}
                        </Typography><br />
                        <Typography>
                            Total Price: Rs. {this.state.unitPrice * this.state.tickets}
                        </Typography><br /><br />
                        <Button variant="contained" onClick={this.bookShowButtonHandler} color="primary">
                            BOOK SHOW
                        </Button>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default BookShow;