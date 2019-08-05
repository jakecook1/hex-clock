import React, { Component, Fragment } from 'react';
import Moment from 'moment';
import { Helmet } from "react-helmet";

import TimeView from '../views/TimeView';
import TitleView from '../views/TitleView';
import StrobeButtonsView from '../views/StrobeButtonsView';

class HexClock extends Component {
    constructor() {
        super();

        const currentDateTime = Moment();

        this.state = {
            hexTime: currentDateTime.format("HHmmss"),
            time: currentDateTime.format("HH:mm:ss"),
            strobe: false
        };

        this.tick = this.tick.bind(this);
        this.onStrobeClick = this.onStrobeClick.bind(this);
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

    onStrobeClick = e => {
        e.preventDefault();
        this.setState({ strobe: e.target.value === "1" ? true : false });
    }

    render() {
        let { hexTime, time, strobe } = this.state;
        hexTime = strobe
                    ? hexTime % 2 === 0
                        ? '000000'
                        : 'FFFFFF'
                    : hexTime;

        return (
            <Fragment>
                <Helmet bodyAttributes={{ style: 'background-color : #' + hexTime }} />
                <TitleView hexTime={hexTime} />
                <TimeView hexTime={hexTime} time={time} />
                <StrobeButtonsView hexTime={hexTime} onStrobeClick={this.onStrobeClick} strobe={strobe} />
            </Fragment>
        );
    }
}

export default HexClock;