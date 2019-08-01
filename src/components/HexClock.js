import React, { Component, Fragment } from 'react';
import Moment from 'moment';
import { Helmet } from "react-helmet";
import TimeDisplay from './TimeDisplay';
import TestView from './views/TestView';

class HexClock extends Component {
    constructor() {
        super();

        const currentDateTime = Moment();

        this.state = {
            hexTime: currentDateTime.format("HHmmss"),
            time: currentDateTime.format("HH:mm:ss")
        };

        this.tick = this.tick.bind(this);
    }

    componentDidMount() {
        const currentDateTime = Moment();
        this.setState({
            hexTime: currentDateTime.format("HHmmss"),
            time: currentDateTime.format("HH:mm:ss")
        });

        this.interval = setInterval(this.tick, 1000);
    }

    componentWillUnmount() { clearInterval(this.interval); }

    tick() {
        const currentDateTime = Moment();
        this.setState({
            hexTime: currentDateTime.format("HHmmss"),
            time: currentDateTime.format("HH:mm:ss")
        });
    }
    render() {
        const { hexTime, time } = this.state;

        return (
            <Fragment>
                <Helmet bodyAttributes={{style: 'background-color : #' + hexTime}}/>
                <TestView />
                <TimeDisplay hexTime={hexTime} time={time} />
            </Fragment>
        );
    }
}

export default HexClock;