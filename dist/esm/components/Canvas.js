import React, { useRef } from 'react';
export const Canvas = (props) => {
    const { children } = props;
    const canvasRef = useRef('');
    return (React.createElement(React.Fragment, null,
        React.createElement("canvas", Object.assign({ id: "myCanvas", width: window.innerWidth, height: window.innerHeight, ref: canvasRef }, props)),
        children));
};
//# sourceMappingURL=Canvas.js.map