import React from 'react';

import { Selector } from './selector';

export default {
  title: 'Components/Selector',
  component: Selector,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
};

const Template = (args: any) => <Selector {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'TextArea'
};
