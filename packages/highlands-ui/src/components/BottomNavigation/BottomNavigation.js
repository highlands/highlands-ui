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
    height: '53px',
    left: '12px',
    position: 'fixed',
    right: '12px',
    '& button': {
      color: '#fff',
      padding: '15px',
    }
  },
});

function DefaultBottomNavigation(props) {
  const {
    border,
    borderRadius,
    color,
    children,
    classes,
    ...otherProps
  } = props;

  return (
    <BottomNavigation
      className={classes.root}
      style={{
        color: color,
        border: border,
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      {children}
    </BottomNavigation>
  );
}


DefaultBottomNavigation.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
};

DefaultBottomNavigation.Action = BottomNavigationAction;

export default withStyles(styles)(DefaultBottomNavigation);
