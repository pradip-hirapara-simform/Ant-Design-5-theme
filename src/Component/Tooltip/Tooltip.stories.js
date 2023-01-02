import React from 'react';
import { Button } from '../Button/Button';
 
import { Tooltip } from './Tooltip.styles';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Tooltip',
  component: Tooltip,
  argTypes: { 
    placement: {
      options: ['top', 'bottom', 'left', 'right',],
      control: { type: 'select' }, // Automatically inferred when 'options' is defined
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <div style={{height: '90vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><Tooltip {...args}/></div>; 
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = { 
  title: 'Tooltip Content',
  children: <Button type="primary">Tooltip</Button>, 
  placement: 'left'
};
 