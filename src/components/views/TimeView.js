import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import { hexToLuma } from '../../helpers/StringExtensions';

class TimeView extends Component {

    render() {
        const { hexTime, time } = this.props;

        return (
            <Container className="display-1 text-monospace text-center mt-3">
                <p style={{ color: hexToLuma(hexTime) }}>{time}</p>
            </Container>
        );
    }
}

export default TimeView;