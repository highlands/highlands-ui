import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Button,
} from '@material-ui/core/';

const styles = theme => ({
  root: {
    borderRadius: '24px',
    borderColor: '#fff',
    boxShadow: 'none',
    color: '#fff',
    fontWeight: 300,
    textTransform: 'none',
    lineHeight: 1,
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
    backgroundColor,
    borderRadius,
    borderWidth,
    children,
    classes,
    color,
    content,
    float,
    fontSize,
    fontWeight,
    href,
    icon,
    iconAfter,
    iconBefore,
    iconColor,
    ...otherProps
  } = props;

  let renderContent;

  if (icon && iconBefore) {
    renderContent = <React.Fragment>
      <i className={classes.left} style={{color: iconColor}}>
        {icon}
      </i>
      {content}
    </React.Fragment>
  } else if (icon && iconAfter) {
    renderContent = <React.Fragment>
      {content}
      <i className={classes.right} style={{color: iconColor}}>
        {icon}
      </i>
    </React.Fragment>
  } else {
    renderContent = <React.Fragment>
      {content}
    </React.Fragment>
  }

  return (
    <Button
      href={href}
      style={{
        color: color,
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
        borderWidth: borderWidth,
        float: float,
        fontSize: fontSize,
        fontWeight: fontWeight,
      }}
      variant='outlined'
      className={classes.root}
      {...otherProps}
    >
      {renderContent}
      {children}
    </Button>
  );
}

DefaultButton.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DefaultButton);
