import React from 'react';
import { TextArea } from './text-area';


export default {
  title: 'Components/TextArea',
  component: TextArea,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <TextArea {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'TextArea',
};