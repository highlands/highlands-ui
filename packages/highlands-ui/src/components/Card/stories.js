import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { decorator } from '../../../.storybook/config';
import Card from './Card';
import Button from '../Button';
import Typography from '../Typography';

storiesOf('Card', module)
  .addDecorator(decorator)
  .add('with content', () => (
    <Card>
      <Card.Content>
        <Typography content='Test' />
      </Card.Content>
    </Card>
  ))
  .add('with multiple content', () => (
    <Card>
      <Card.Content>
        <Typography content='Test' />
      </Card.Content>
      <Card.Content>
        <Typography content='Test' />
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
      <Card.Content style={{display: 'inline-block', padding: '12px 16px'}}>
        <Typography inline content='January 31' />
      </Card.Content>
      <Button
        color='#000'
        backgroundColor='#fff'
        content='Button'
        float='right'
        variant='contained'
      />
    </Card>
  ))
