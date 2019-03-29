import React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { decorator } from '../../../.storybook/config';
import BottomNavigation from './BottomNavigation';
import Button from '../Button';
import {
  Collapse,
  Icon,
} from '@material-ui/core';

storiesOf('Bottom Navigation', module)
  .addDecorator(decorator)
  .add('with icons', () => {
    const [expanded, setExpanded] = React.useState(false);
    const [value, setValue] = React.useState('home');
    return (
      <div
        style={{
          height: '95vh',
        }}
      >
        <BottomNavigation
          value={value}
          collapse={
            <Collapse in={expanded}>
              <div style={{height: '150px'}}>
                <Button
                  borderWidth='0px'
                  content='Give'
                  icon='chevron_right'
                  iconAfter
                  onClick={action('clicked')}
                />
              </div>
            </Collapse>
          }
          onChange={(e, value) => setValue(value)}
        >
          <BottomNavigation.Action
            icon={<Icon>home</Icon>}
            value='home'
          />
          <BottomNavigation.Action
            icon={<Icon>book</Icon>}
            value='bible'
          />
          <BottomNavigation.Action
            icon={<Icon>keyboard_arrow_up</Icon>}
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            aria-label="More"
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
