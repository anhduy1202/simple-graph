import React from 'react';
import { Button } from '../components';
export default {
    component: Button,
    title: 'Button'
};
const Template = (args) => React.createElement(Button, Object.assign({}, args));
export const Primary = Template.bind({});
Primary.args = {
    backgroundColor: 'black'
};
//# sourceMappingURL=Button.stories.js.map