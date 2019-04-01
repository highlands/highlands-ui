import React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { decorator } from '../../../.storybook/config';
import IconButton from './IconButton';
import {
  DrawerIcon,
} from '@highlands/highlands-ui-icons';

storiesOf('IconButton', module)
  .addDecorator(decorator)
	.add('as default', () => (
    <IconButton
      icon={<DrawerIcon />}
      onClick={action('clicked')}
    />
	))
