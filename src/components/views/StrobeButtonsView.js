import React from 'react';
import { Container, ButtonGroup } from 'react-bootstrap';

import { hexToLuma } from '../../helpers/StringExtensions';
import ButtonControl from 'components/controls/ButtonControl';

const StrobeButtonsView = props => {
    const { hexTime } = props;
    return (
        <Container className="text-monospace text-center mt-3">
            <p style={{ color: hexToLuma(hexTime) }}>Strobe</p>
            <ButtonGroup>
                <ButtonControl {...props} text={"On"} value={"1"} />
                <ButtonControl {...props} text={"Off"} value={"0"} />
            </ButtonGroup>
        </Container>
    );
}

export default StrobeButtonsView;