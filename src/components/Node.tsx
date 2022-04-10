import React, { useEffect } from 'react';
import { Canvas } from './Canvas';

export interface NodeType {
    val: string | number;
}

export const Node: React.FC<NodeType> = (props) => {
    const { val } = props;

    useEffect(() => {
        var nodeNumber = document?.querySelectorAll('#node').length;
        const canvas: any = document?.getElementById('myCanvas');
        const ctx: any = canvas.getContext('2d');
        ctx.beginPath();
        ctx.arc(nodeNumber + 75, nodeNumber + 75, 50, 0, Math.PI * 2, true);
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.font = '30px Arial';
        ctx.fillText(val, nodeNumber + 65, nodeNumber + 85);
    }, []);

    return (
        <div id="node">
            <Canvas></Canvas>
        </div>
    );
};
