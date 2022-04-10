import React from 'react';
import { Story } from '@storybook/react';
import { Node } from '../components/Node';

export default {
    component: Node,
    title: 'Node'
};

const Template: Story = (args) => (
    <>
        <Node val={5} {...args} />
    </>
);

export const Primary = Template.bind({});
