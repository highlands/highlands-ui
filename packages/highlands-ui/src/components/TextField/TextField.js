import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  TextField
} from '@material-ui/core/';

const styles = theme => ({
  focused: {},
  label: {
    color: theme.palette.primary.main,
    '&:focus,&:hover': {
      color: theme.palette.primary.main,
    }
  },
  notchedOutline: {},
  outlinedInput: {
    '& fieldset': {
      borderRadius: theme.spacing.unit * 4,
    },
    '& input': {
      //paddingLeft: theme.spacing.unit * 3,
      //paddingRight: theme.spacing.unit * 3,
    },
    '& $notchedOutline': {
      borderColor: theme.palette.primary.main,
      '&:focus,&:hover': {
        borderColor: theme.palette.primary.main,
      }
    },
    color: theme.palette.primary.main
  },
});

function DefaultTextField(props) {
  const {
    classes,
    defaultValue,
    id,
    label,
    name,
    onChange,
    ...otherProps
  } = props;
  return (
    <TextField
      {...otherProps}
      defaultValue={defaultValue}
      InputLabelProps={{
        classes: {
          root: classes.label
        }
      }}
      InputProps={{
        classes: {
          root: classes.outlinedInput,
          focused: classes.focused,
          notchedOutline: classes.notchedOutline,
        }
      }}
      label={label}
      margin='dense'
      name={name}
      onChange={onChange}
      variant='outlined'
    />
  );
}

DefaultTextField.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DefaultTextField);
