import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './Button';

storiesOf('Button', module)
	.add('as default', () => (
    <Button
      content='Button'
      onClick={action('clicked')}
    />
	))
  .add('as default with icon', () => (
    <Button
      content='Button'
      icon='add'
      iconBefore
      onClick={action('clicked')}
    />
 ))
  .add('as contained', () => (
    <Button
      content='Button'
      onClick={action('clicked')}
      variant='contained'
    />
 ))
  .add('as contained with icon', () => (
    <Button
      content='Button'
      icon='add'
      iconBefore
      onClick={action('clicked')}
      variant='contained'
    />
 ))
