import React from 'react';
import { Container } from 'react-bootstrap';

import { TestValue } from '../../constants/valueTypes';

const TestView = props => {
    return (
        <Container className="display-1 text-monospace text-center mt-3">
            <h1>{TestValue}</h1>
        </Container>
    );
}

export default TestView;