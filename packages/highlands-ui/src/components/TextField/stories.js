import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { decorator } from '../../../.storybook/config';
import TextField from './TextField';

storiesOf('TextField', module)
  .addDecorator(decorator)
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
