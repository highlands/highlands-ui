import React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { decorator } from '../../../.storybook/config';
import Button from './Button';
import {
  Icon,
} from '@material-ui/core';

storiesOf('Button', module)
  .addDecorator(decorator)
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
      backgroundColor='#fff'
      color='#000'
      content='Button'
      onClick={action('clicked')}
      variant='contained'
    />
 ))
  .add('as contained with icon', () => (
    <Button
      backgroundColor='#fff'
      color='#000'
      content='Button'
      icon='add'
      iconBefore
      onClick={action('clicked')}
      variant='contained'
    />
 ))
  .add('with no border', () => (
    <Button
      borderWidth='0px'
      content='Button'
      onClick={action('clicked')}
    />
 ))
  .add('with no border and blue icon', () => (
    <Button
      borderWidth='0px'
      content='Click Here'
      icon='add'
      iconBefore
      iconColor='#1489CB'
      onClick={action('clicked')}
    >
      <Icon>
        chevron_right
      </Icon>
    </Button>
 ))
