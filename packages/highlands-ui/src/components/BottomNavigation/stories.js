import React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { decorator } from '../../../.storybook/config';
import BottomNavigation from './BottomNavigation';
import Button from '../Button';
import {
  Collapse,
} from '@material-ui/core';
import {
  CaretIcon,
  NavBibleIcon,
  NavGroupsIcon,
  NavHomeIcon,
  NavMediaIcon,
  NavMoreIcon,
} from '@highlands/highlands-ui-icons';

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
                  content={<span>Give&nbsp;&nbsp;<CaretIcon /></span>}
                  onClick={action('clicked')}
                />
              </div>
            </Collapse>
          }
          onChange={(e, value) => setValue(value)}
        >
          <BottomNavigation.Action
            icon={<NavHomeIcon />}
            value='home'
          />
          <BottomNavigation.Action
            icon={<NavBibleIcon />}
            value='bible'
          />
          <BottomNavigation.Action
            icon={<NavMoreIcon />}
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            aria-label="More"
          />
          <BottomNavigation.Action
            icon={<NavGroupsIcon />}
            value='groups'
          />
          <BottomNavigation.Action
            icon={<NavMediaIcon />}
            value='media'
          />
        </BottomNavigation>
      </div>
    )
  })
