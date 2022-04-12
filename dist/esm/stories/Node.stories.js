import React from 'react';
import { Node } from '../components/Node';
import { Canvas } from '../components';
export default {
    component: Node,
    title: 'Node'
};
const Template = (args) => (React.createElement(Canvas, null,
    React.createElement(Node, Object.assign({ label: 'A', x: 75, y: 75, neighbor: "B" }, args)),
    React.createElement(Node, Object.assign({ label: 'B', x: 600, y: 85, neighbor: "A" }, args)),
    React.createElement(Node, Object.assign({ label: 'C', x: 600, y: 500, neighbor: "B" }, args))));
export const Primary = Template.bind({});
//# sourceMappingURL=Node.stories.js.map