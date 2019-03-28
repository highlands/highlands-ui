import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia
} from '@material-ui/core/';

const styles = theme => ({
  root: {
    backgroundColor: 'unset',
    borderRadius: '24px',
    border: 'solid 1px #fff',
    boxShadow: 'none',
    color: '#fff',
    padding: '6px',
    '& div[class^="MuiCardContent"]': {
      margin: '-6px',
    },
    '& div[class^="MuiCardMedia"]': {
      margin: '-6px',
    },
    '& div[class^="MuiCardContent"]:not(:first-child)': {
      borderTop: 'solid 1px #fff',
    },
  },
});

function DefaultCard(props) {
  const {
    border,
    borderRadius,
    color,
    children,
    classes,
    ...otherProps
  } = props;

  return (
    <Card
      className={classes.root}
      style={{
        color: color,
        border: border,
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      {children}
    </Card>
  );
}


DefaultCard.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
};

DefaultCard.Actions = CardActions;
DefaultCard.ActionArea = CardActionArea;
DefaultCard.Content = CardContent;
DefaultCard.Header = CardHeader;
DefaultCard.Media = CardMedia;

export default withStyles(styles)(DefaultCard);
