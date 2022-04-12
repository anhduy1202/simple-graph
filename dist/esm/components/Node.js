import React, { useEffect } from 'react';
export const Node = (props) => {
    const { label, x, y, neighbor } = props;
    useEffect(() => {
        const canvas = document === null || document === void 0 ? void 0 : document.getElementById('myCanvas');
        const ctx = canvas.getContext('2d');
        if (neighbor) {
            let docs = document.querySelectorAll(`[id^="${neighbor}"]`);
            let arr = new Array([...docs]);
            const [nestedArray] = arr;
            const [positionString] = nestedArray;
            let positionArray = positionString.id.split(' ');
            ctx.beginPath();
            ctx.moveTo(positionArray[1], positionArray[2]);
            ctx.lineTo(x, y);
            ctx.stroke();
        }
        ctx.beginPath();
        ctx.arc(x, y, 50, 0, Math.PI * 2, true);
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.font = '30px Arial';
        ctx.fillText(label, x - 10, y + 10);
    }, []);
    return React.createElement("div", { id: `${label} ${x} ${y}` });
};
//# sourceMappingURL=Node.js.map