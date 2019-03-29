import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  BottomNavigation,
  BottomNavigationAction
} from '@material-ui/core/';

const styles = theme => ({
  root: {
    backgroundColor: '#046',
    borderRadius: '24px',
    bottom: '12px',
    height: 'unset',
    left: '12px',
    position: 'fixed',
    right: '12px',
    '& button[class*="MuiBottomNavigationAction-root"]': {
      alignSelf: 'start',
      color: '#fff',
      padding: '15px',
    },
    '& button[class*="MuiBottomNavigationAction-selected"]': {
      color: '#AFD35F',
    },
    '& div[class*="MuiCollapse-container"]': {
    },
  },
  nav: {
    backgroundColor: 'unset',
  },
});

function DefaultBottomNavigation(props) {
  const {
    border,
    borderRadius,
    color,
    collapse,
    children,
    classes,
    ...otherProps
  } = props;

  return (
    <div
      className={classes.root}
      style={{
        color: color,
        border: border,
        borderRadius: borderRadius,
      }}
    >
      <BottomNavigation
        className={classes.nav}
        {...otherProps}
      >
        {children}
      </BottomNavigation>
      {collapse}
    </div>
  );
}


DefaultBottomNavigation.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
};

DefaultBottomNavigation.Action = BottomNavigationAction;

export default withStyles(styles)(DefaultBottomNavigation);
