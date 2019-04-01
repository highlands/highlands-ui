import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  IconButton,
} from '@material-ui/core/';

const styles = theme => ({
  root: {
    color: '#fff',
  },
});

function DefaultIconButton(props) {
  const {
    backgroundColor,
    children,
    classes,
    color,
    float,
    href,
    icon,
    ...otherProps
  } = props;

  return (
    <IconButton
      href={href}
      style={{
        color: color,
        backgroundColor: backgroundColor,
        float: float,
      }}
      className={classes.root}
      {...otherProps}
    >
      {icon}
      {children}
    </IconButton>
  );
}

DefaultIconButton.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DefaultIconButton);
