import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button } from '../components';

export default {
    component: Button,
    title: 'Button'
};

const Template: Story = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    backgroundColor: 'black'
};
