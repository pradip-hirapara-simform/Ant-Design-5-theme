import { DownloadOutlined } from '@ant-design/icons/lib/icons';
import React from 'react';

import { Card } from './Card';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Card',
  component: Card,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Card {...args}/>; 
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = { 
  title: 'Cart Title',
  children: 'Card Content',
  loading: false, 
};
 