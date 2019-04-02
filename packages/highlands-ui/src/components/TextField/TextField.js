import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  TextField
} from '@material-ui/core/';

const styles = theme => ({
  focused: {},
  label: {
    color: '#fff',
    '&:focus,&:hover': {
      color: '#fff',
    }
  },
  notchedOutline: {},
  outlinedInput: {
    '& fieldset': {
      borderRadius: 32,
    },
    '& $notchedOutline': {
      borderColor: '#fff',
      '&:focus,&:hover': {
        borderColor: '#fff',
      }
    },
    color: '#fff'
  },
});

function DefaultTextField(props) {
  const {
    classes,
    color,
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
