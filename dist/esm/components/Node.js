import React, { useEffect } from 'react';
import { Canvas } from './Canvas';
export const Node = (props) => {
    const { val } = props;
    useEffect(() => {
        var nodeNumber = document === null || document === void 0 ? void 0 : document.querySelectorAll('#node').length;
        const canvas = document === null || document === void 0 ? void 0 : document.getElementById('myCanvas');
        const ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.arc(nodeNumber + 75, nodeNumber + 75, 50, 0, Math.PI * 2, true);
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.font = '30px Arial';
        ctx.fillText(val, nodeNumber + 65, nodeNumber + 85);
    }, []);
    return (React.createElement("div", { id: "node" },
        React.createElement(Canvas, null)));
};
//# sourceMappingURL=Node.js.map