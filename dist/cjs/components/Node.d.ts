import React from 'react';
export interface NodeType {
    label: string | number;
    x: number;
    y: number;
}
export declare const Node: React.FC<NodeType>;
