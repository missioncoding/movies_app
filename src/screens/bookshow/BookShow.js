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
import Confirmation from '../confirmation/Confirmation';
import { Button, FormControl, FormHelperText, Input, InputLabel, MenuItem, Select } from '@material-ui/core';

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
            availableTickets : 20,
            locationRequired : "dispNone",
            languageRequired : "dispNone",
            showTimeRequired : "dispNone",
            showDateRequired : "dispNone",
            ticketsRequired  : "dispNone"
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

    bookShowButtonHandler = () => {
        this.state.language === "" ? this.setState({languageRequired: "dispBlock"}) : 
                                     this.setState({languageRequired: "dispNone"});
        this.state.location === "" ? this.setState({locationRequired: "dispBlock"}) : 
                                     this.setState({locationRequired: "dispNone"});
        this.state.showTime === "" ? this.setState({showTimeRequired: "dispBlock"}) : 
                                     this.setState({showTimeRequired: "dispNone"});
        this.state.showDate === "" ? this.setState({showDateRequired: "dispBlock"}) : 
                                     this.setState({showDateRequired: "dispNone"});
        this.state.tickets === "" ||  this.state.tickets === 0
                            ? this.setState({ticketsRequired: "dispBlock"}) : 
                                     this.setState({ticketsRequired: "dispNone"});
        
        ReactDOM.render(<Confirmation bookingSummary={this.state} />, document.getElementById('root'));
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
                        </Typography><br />
                        <FormControl required className="formControl">
                            <InputLabel htmlFor="location">Choose Location: </InputLabel>
                            <Select 
                                value={this.state.location}
                                onChange={this.locationChangeHandler}>
                                {location.map(loc => (
                                    <MenuItem key={"loc" + loc.id} value={loc.location}>{loc.location}</MenuItem>
                                ))}
                                </Select>
                                <FormHelperText className={this.state.locationRequired}>
                                    <span className="red">required</span>
                                </FormHelperText>
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
                                <FormHelperText className={this.state.languageRequired}>
                                    <span className="red">required</span>
                                </FormHelperText>
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
                                <FormHelperText className={this.state.showDateRequired}>
                                    <span className="red">required</span>
                                </FormHelperText>
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
                                <FormHelperText className={this.state.showTimeRequired}>
                                    <span className="red">required</span>
                                </FormHelperText>
                        </FormControl>
                        <FormControl required className="formControl">
                            <InputLabel htmlFor="tickets">Tickets: ({this.state.availableTickets} available)</InputLabel>
                            <Input id="tickets" value={this.state.tickets !==0 ? this.state.tickets : ""} onChange={this.ticketsChangeHandler}/>
                            <FormHelperText className={this.state.ticketsRequired}>
                                    <span className="red">required</span>
                            </FormHelperText>
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