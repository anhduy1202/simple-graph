import React from 'react';
export interface NodeType {
    uuid?: number;
    neighbor?: string;
    label: string;
    x: number;
    y: number;
}
export declare const Node: React.FC<NodeType>;
