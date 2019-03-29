import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { decorator } from '../../../.storybook/config';
import Typography from './Typography';

storiesOf('Typography', module)
  .addDecorator(decorator)
  .add('with content', () => (
    <Typography content='Text' />
  ))
  .add('with color', () => (
    <Typography color='red' content='Text' />
  ))
  .add('with variant', () => (
    <Typography content='Text' variant='h1' />
  ))
