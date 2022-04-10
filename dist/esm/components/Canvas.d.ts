import React from 'react';
export interface CanvasType extends React.DetailedHTMLProps<React.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement> {
    width?: string;
    height?: string;
}
export declare const Canvas: React.FC<CanvasType>;
