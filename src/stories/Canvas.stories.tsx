import React from 'react';
import { Story } from '@storybook/react';
import { Canvas } from '../components/Canvas';

export default {
    component: Canvas,
    title: 'Canvas'
};

const Template: Story = (args) => <Canvas {...args} />;

export const Primary = Template.bind({});
