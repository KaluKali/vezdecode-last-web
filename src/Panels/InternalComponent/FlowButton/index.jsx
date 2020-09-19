import React from "react";
import {Button} from "@vkontakte/vkui";

const FlowButton = (props) => {
    const { mode, content, onClick, style } = props;

    return (
        <Button mode={mode === 'active' ? 'secondary' : 'outline'} style={{
            borderColor: mode === 'passive' ? 'rgba(0, 0, 0, 0.12)' : '',
            background: mode === 'active' ? 'rgba(173, 211, 255, 0.32)' : '',
            border: mode === 'passive' ? '1px solid' : '',
            color: mode === 'passive' ? 'rgba(0, 0, 0, 0.35)' : '#4986CC',
            ...style
        }} onClick={onClick}>{content}</Button>
    );
};

// Example.propTypes = {
//     id: PropTypes.string.isRequired,
// };

export default FlowButton;
