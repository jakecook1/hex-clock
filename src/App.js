import React from 'react';
import Moment from 'moment';
import { Helmet } from "react-helmet";
import { Container } from 'react-bootstrap';
import './App.css';

class App extends React.Component {
    constructor() {
        super();

        const currentDateTime = Moment();

        this.state = {
            hexTime: currentDateTime.format("HHmmss"),
            time: currentDateTime.format("HH:mm:ss")
        };

        this.tick = this.tick.bind(this);
    }

    tick() {
        const currentDateTime = Moment();
        this.setState({
            hexTime: currentDateTime.format("HHmmss"),
            time: currentDateTime.format("HH:mm:ss")
        });
    }

    componentDidMount() {
        const currentDateTime = Moment();
        this.setState({
            hexTime: currentDateTime.format("HHmmss"),
            time: currentDateTime.format("HH:mm:ss")
        });

        this.interval = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    hexToLuma = (colour) => {
        const hex = colour.replace(/#/, '');
        const r = parseInt(hex.substr(0, 2), 16);
        const g = parseInt(hex.substr(2, 2), 16);
        const b = parseInt(hex.substr(4, 2), 16);
    
        let luma = [0.299 * r, 0.587 * g, 0.114 * b].reduce((a, b) => a + b) / 255;
        return luma > 0.5 ? 'black' : 'white';
    };

    render() {
        return (
            <React.Fragment>
                <Helmet bodyAttributes={{style: 'background-color : #' + this.state.hexTime}}/>
                <Container className="display-1 text-monospace text-center mt-3">
                    <p style={{ color: this.hexToLuma(this.state.hexTime) }}>
                        {this.state.time}
                    </p>
                </Container>
            </React.Fragment>
        );
    }
}

export default App;
