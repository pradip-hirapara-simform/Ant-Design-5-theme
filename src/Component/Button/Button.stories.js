import { DownloadOutlined } from '@ant-design/icons/lib/icons';
import React from 'react';

import { Button } from './Button';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Button',
  component: Button,  
  argTypes: { 
    size: {
      options: ['small', 'middle', 'large'],
      control: { type: 'select' }, // Automatically inferred when 'options' is defined
    },
    children: {  
      control: { type: 'text' }, // Automatically inferred when 'options' is defined
    },
  },
};
 
const Template = (args) => <Button {...args}/>; 

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  type: 'primary',
  children: 'Button',
  loading: false, 
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'default',
  children: 'Button',
  loading: false,    
}; 

export const TextWithIcon = Template.bind({});
TextWithIcon.args = {
  type: 'primary',
  children: 'Button',
  loading: false,
  icon: <DownloadOutlined />
}; 
export const IconButton = Template.bind({});
IconButton.args = {
  type: 'primary', 
  loading: false,
  icon: <DownloadOutlined />
};  