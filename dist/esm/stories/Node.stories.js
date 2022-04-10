import React from 'react';
import { Node } from '../components/Node';
export default {
    component: Node,
    title: 'Node'
};
const Template = (args) => (React.createElement(React.Fragment, null,
    React.createElement(Node, Object.assign({ val: 5 }, args))));
export const Primary = Template.bind({});
//# sourceMappingURL=Node.stories.js.map