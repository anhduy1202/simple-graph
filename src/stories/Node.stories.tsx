import React from 'react';
import { Story } from '@storybook/react';
import { Node } from '../components/Node';
import { Canvas } from '../components';

export default {
    component: Node,
    title: 'Node'
};

const Template: Story = (args) => (
    <Canvas>
        <Node label={'A'} x={75} y={75} neighbor="B" {...args} />
        <Node label={'B'} x={600} y={85} neighbor="A" {...args} />
        <Node label={'C'} x={600} y={500} neighbor="B" {...args} />
    </Canvas>
);

export const Primary = Template.bind({});
