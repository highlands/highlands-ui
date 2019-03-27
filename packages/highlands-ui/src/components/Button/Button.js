import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Button,
  Icon
} from '@material-ui/core/';

const styles = theme => ({
  button: {
    borderRadius: theme.spacing.unit * 4,
    color: theme.palette.common.white,
    '&:focus,&:hover': {
      color: theme.palette.common.white,
    }
  },
  left: {
    marginRight: theme.spacing.unit
  },
  right: {
    marginLeft: theme.spacing.unit
  },
});

function DefaultButton(props) {
  const {
    children,
    classes,
    color,
    content,
    href,
    icon,
    iconAfter,
    iconBefore,
    ...otherProps
  } = props;

  let renderContent;

  if (icon && iconBefore) {
    renderContent = <React.Fragment>
      <Icon className={classes.left}>
        {icon}
      </Icon>
      {content}
    </React.Fragment>
  } else if (icon && iconAfter) {
    renderContent = <React.Fragment>
      {content}
      <Icon className={classes.right}>
        {icon}
      </Icon>
    </React.Fragment>
  } else {
    renderContent = <React.Fragment>
      {content}
    </React.Fragment>
  }

  return (
    <Button
      href={href}
      variant='outlined'
      className={classes.button}
      {...otherProps}
    >
      {renderContent}
      {children}
    </Button>
  );
}

DefaultButton.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DefaultButton);
