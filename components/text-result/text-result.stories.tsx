import React from 'react';

import { TextResult } from './text-result';

export default {
  title: 'Components/TextResult',
  component: TextResult,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
};

const Template = (args: any) => <TextResult {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'TextResult'
};
