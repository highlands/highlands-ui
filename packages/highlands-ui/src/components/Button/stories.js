import React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { decorator } from '../../../.storybook/config';
import Button from './Button';
import {
  CaretIcon,
  LocationsIcon,
  DrawerIcon,
} from '@highlands/highlands-ui-icons';

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
      icon={<LocationsIcon />}
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
      icon={<LocationsIcon />}
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
      content={<span>Click Here&nbsp;&nbsp;<CaretIcon /></span>}
      fontSize={20}
      icon={<LocationsIcon />}
      iconBefore
      iconColor='#1489CB'
      onClick={action('clicked')}
    />
 ))
