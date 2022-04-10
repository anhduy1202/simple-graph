import { useEffect } from 'react';
import React, { useRef } from 'react';
export const Canvas = (props) => {
    const { children } = props;
    const canvasRef = useRef('');
    useEffect(() => {
        let element = document.getElementsByTagName('html')[0];
        let body = document.getElementsByTagName('body')[0];
        element.style.width = '100vw';
        element.style.height = '100vh';
        body.style.width = '100vw';
        body.style.height = '100vh';
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement("canvas", Object.assign({ id: "myCanvas", style: { width: '600', height: '600' }, ref: canvasRef }, props)),
        children));
};
//# sourceMappingURL=Canvas.js.map