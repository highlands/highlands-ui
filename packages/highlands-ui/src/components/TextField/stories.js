import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TextField from './TextField';

storiesOf('TextField', module)
	.add('as default', () => (
    <TextField
      color='pink'
      label='Text Field'
      placeholder='Text Field'
      name='text-field'
      defaultValue=''
      onChange={action('changed')}
    />
	))
