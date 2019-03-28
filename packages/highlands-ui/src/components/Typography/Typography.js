import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Typography
} from '@material-ui/core/';

const styles = theme => ({
  root: {
    color: '#fff',
  }
});

function DefaultTypography(props) {
  const {
    color,
    content,
    children,
    classes,
    ...otherProps
  } = props;

  return (
    <Typography
      className={classes.root}
      style={{
        color: color,
      }}
      {...otherProps}
    >
      {content}
      {children}
    </Typography>
  );
}


DefaultTypography.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DefaultTypography);
