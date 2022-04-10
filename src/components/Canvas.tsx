import { useEffect } from 'react';
import React, { useRef } from 'react';

export interface CanvasType extends React.DetailedHTMLProps<React.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement> {
    width?: string;
    height?: string;
}

export const Canvas: React.FC<CanvasType> = (props) => {
    const { children } = props;
    const canvasRef = useRef<any>('');

    useEffect(() => {
        let element = document.getElementsByTagName('html')[0];
        let body = document.getElementsByTagName('body')[0];
        element.style.width = '100vw';
        element.style.height = '100vh';
        body.style.width = '100vw';
        body.style.height = '100vh';
    }, []);
    return (
        <>
            <canvas id="myCanvas" style={{ width: '600', height: '600' }} ref={canvasRef} {...props}></canvas>
            {children}
        </>
    );
};
