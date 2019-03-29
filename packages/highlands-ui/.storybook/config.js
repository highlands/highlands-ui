import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import {
  createMuiTheme,
  MuiThemeProvider
} from '@material-ui/core/styles';
import myTheme from './theme';

addParameters({
  options: {
    theme: myTheme,
  },
});

addDecorator((Story) => <Story />);

const req = require
  .context('../src/components', true, /[^/]+\/stories.js$/);

function loadStories() {
	req.keys().forEach((filename) => req(filename));
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1489cb',
      contrastText: '#fff'
    },
    secondary: {
      main: '#094a67',
      contrastText: '#fff'
    },
  },
  typography: {
    fontFamily: 'proxima-nova, Helvetica, Arial, sans-serif',
    htmlFontSize: 14,
  }
});

export const decorator = storyFn =>
  <MuiThemeProvider theme={theme}>{storyFn()}</MuiThemeProvider>;

configure(loadStories, module);
