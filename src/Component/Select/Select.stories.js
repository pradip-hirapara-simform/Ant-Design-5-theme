 import React from 'react';
import { Select } from './Select';
 
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Select',
  component: Select,
  argTypes: { 
    size: {
      options: ['small', 'middle', 'large'],
      control: { type: 'select' }, // Automatically inferred when 'options' is defined
    }, 
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Select {...args}/>; 

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {  
  defaultValue: 'optionsone',
  options:  [
    {
      value: "optionsone",
      label: "Options One",
    },
    {
      value: "optionstwo",
      label: "Options Two",
    },
  ]
};
 
