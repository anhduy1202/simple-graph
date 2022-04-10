import React, { useEffect } from 'react';

export interface NodeType {
    label: string | number;
    x: number;
    y: number;
}

export const Node: React.FC<NodeType> = (props) => {
    const { label, x, y } = props;

    useEffect(() => {
        const canvas: any = document?.getElementById('myCanvas');
        const ctx: any = canvas.getContext('2d');
        ctx.beginPath();
        ctx.arc(x, y, 50, 0, Math.PI * 2, true);
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.font = '30px Arial';
        ctx.fillText(label, x - 10, y + 10);
    }, []);

    return <div id="node"></div>;
};
