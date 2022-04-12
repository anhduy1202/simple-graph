import React, { useRef } from 'react';

export interface CanvasType extends React.DetailedHTMLProps<React.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement> {}

export const Canvas: React.FC<CanvasType> = (props) => {
    const { children } = props;
    const canvasRef = useRef<any>('');
    return (
        <>
            <canvas id="myCanvas" width={window.innerWidth} height={window.innerHeight} ref={canvasRef} {...props}></canvas>
            {children}
        </>
    );
};
