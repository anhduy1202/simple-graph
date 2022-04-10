import React, { useEffect } from 'react';
export const Node = (props) => {
    const { label, x, y } = props;
    useEffect(() => {
        const canvas = document === null || document === void 0 ? void 0 : document.getElementById('myCanvas');
        const ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.arc(x, y, 50, 0, Math.PI * 2, true);
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.font = '30px Arial';
        ctx.fillText(label, x - 10, y + 10);
    }, []);
    return React.createElement("div", { id: "node" });
};
//# sourceMappingURL=Node.js.map