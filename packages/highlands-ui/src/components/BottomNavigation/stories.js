import React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { decorator } from '../../../.storybook/config';
import BottomNavigation from './BottomNavigation';
import Icon from '@material-ui/core/Icon';

storiesOf('Bottom Navigation', module)
  .addDecorator(decorator)
  .add('with icons', () => {
    const [value, setValue] = React.useState('home');
    return (
      <div
        style={{
          height: '95vh',
        }}
      >
        <BottomNavigation
          value={value}
          onChange={(e, value) => setValue(value)}
        >
          <BottomNavigation.Action
            icon={<Icon>keyboard_arrow_up</Icon>}
            value='menu'
          />
          <BottomNavigation.Action
            icon={<Icon>home</Icon>}
            value='home'
          />
          <BottomNavigation.Action
            icon={<Icon>book-open-variant</Icon>}
            value='bible'
          />
          <BottomNavigation.Action
            icon={<Icon>people_outline</Icon>}
            value='groups'
          />
          <BottomNavigation.Action
            icon={<Icon>play_circle_outline</Icon>}
            value='media'
          />
        </BottomNavigation>
      </div>
    )
  })