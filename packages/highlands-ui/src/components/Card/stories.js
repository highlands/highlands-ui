import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Card from './Card';
import Button from '../Button';
import Typography from '../Typography';

storiesOf('Card', module)
  .add('with content', () => (
    <Card>
      <Card.Content>
        Test
      </Card.Content>
    </Card>
  ))
  .add('with multiple content', () => (
    <Card>
      <Card.Content>
        Test
      </Card.Content>
      <Card.Content>
        Test
      </Card.Content>
    </Card>
  ))
	.add('with media', () => (
    <div style={{maxWidth: '122px'}}>
      <Card border='unset'>
        <Card.Media
          image='https://placeimg.com/280/160/any'
          title='Title'
          style={{height: '160px'}}
        />
      </Card>
    </div>
	))
  .add('with button', () => (
    <Card>
      <Button content='Button' float='right' variant='contained' />
    </Card>
  ))
