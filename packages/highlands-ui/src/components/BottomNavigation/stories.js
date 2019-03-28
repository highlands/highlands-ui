import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import BottomNavigation from './BottomNavigation';
import Icon from '@material-ui/core/Icon';

storiesOf('Bottom Navigation', module)
  .add('with icons', () => (
    <div
      style={{
        height: '95vh',
      }}
    >
      <BottomNavigation>
        <BottomNavigation.Action icon={<Icon>keyboard_arrow_up</Icon>} />
        <BottomNavigation.Action icon={<Icon>home</Icon>} />
        <BottomNavigation.Action icon={<Icon>book-open-variant</Icon>} />
        <BottomNavigation.Action icon={<Icon>people_outline</Icon>} />
        <BottomNavigation.Action icon={<Icon>play_circle_outline</Icon>} />
      </BottomNavigation>
    </div>
  ))
