import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ButtonControl = props => {
    const { onStrobeClick, strobe, text, value } = props;
    return (
        <Button
            onClick={onStrobeClick}
            value={value}
            color="primary"
            disabled={value === "1" ? strobe : !strobe}>
                {text}
        </Button>
    );
}

ButtonControl.propTypes = {
    type: PropTypes.string.isRequired,
    onStrobeClick: PropTypes.func.isRequired,
    value: PropTypes.string,
    disabled: PropTypes.bool
}

ButtonControl.defaultProps = {
    type: 'button',
    disabled: false
}

export default ButtonControl;