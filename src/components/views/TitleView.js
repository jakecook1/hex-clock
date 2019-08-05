import React from 'react';
import { Container } from 'react-bootstrap';

import { Title } from 'constants/valueTypes';
import { hexToLuma } from '../../helpers/StringExtensions';

const TitleView = props => {
    const { hexTime } = props;

    return (
        <Container className="display-1 text-monospace text-center mt-3">
            <h1 style={{ color: hexToLuma(hexTime) }}>{Title}</h1>
        </Container>
    );
}

export default TitleView;