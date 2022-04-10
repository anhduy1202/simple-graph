import React from 'react';
import { Node } from '../components/Node';
import { Canvas } from '../components';
export default {
    component: Node,
    title: 'Node'
};
const Template = (args) => (React.createElement(Canvas, null,
    React.createElement(Node, Object.assign({ label: 'A', x: 75, y: 75 }, args)),
    React.createElement(Node, Object.assign({ label: 'B', x: 600, y: 85 }, args))));
export const Primary = Template.bind({});
//# sourceMappingURL=Node.stories.js.map