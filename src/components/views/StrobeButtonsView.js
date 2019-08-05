import React from 'react';
import { Container, ButtonGroup, Button } from 'react-bootstrap';

import { hexToLuma } from '../../helpers/StringExtensions';

const StrobeButtonsView = props => {
    const { onStrobeClick, hexTime } = props;
    return (
        <Container className="text-monospace text-center mt-3">
            <p style={{ color: hexToLuma(hexTime) }}>Strobe</p>
            <ButtonGroup>
                <Button onClick={onStrobeClick} value="1" color="primary">On</Button>
                <Button onClick={onStrobeClick} value="0" color="primary">Off</Button>
            </ButtonGroup>
        </Container>
    );
}

export default StrobeButtonsView;