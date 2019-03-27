import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './Button';

storiesOf('Button', module)
	.add('with content', () => (
    <Button
      content='Button'
      onClick={action('clicked')}
    />
	))
  .add('with icon', () => (
    <Button
      iconBefore
      content='Button'
      icon='add'
      onClick={action('clicked')}
    />
 ))
