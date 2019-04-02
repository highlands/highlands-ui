import React from 'react';
import ReactDOM from 'react-dom';
import warning from 'warning';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Input,
  FilledInput,
  OutlinedInput,
  InputLabel,
  FormControl,
  FormHelperText,
  Select,
} from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';

const variantComponent = {
  standard: Input,
  filled: FilledInput,
  outlined: OutlinedInput,
};

const styles = theme => ({
  root: {},
  focused: {},
  notchedInput: {},
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

const TextField = React.forwardRef(function TextField(props, ref) {
  const {
    autoComplete,
    autoFocus,
    children,
    classes,
    className: classNameProp,
    defaultValue,
    error,
    FormHelperTextProps,
    fullWidth,
    helperText,
    id,
    InputLabelProps,
    inputProps,
    InputProps,
    inputRef,
    label,
    multiline,
    name,
    onBlur,
    onChange,
    onFocus,
    placeholder,
    required,
    rows,
    rowsMax,
    select,
    SelectProps,
    type,
    value,
    variant,
    ...other
  } = props;

  const [labelWidth, setLabelWidth] = React.useState(0);
  const labelRef = React.useRef();
  React.useEffect(() => {
    if (variant === 'outlined') {
      // StrictMode ready
      const labelNode = ReactDOM.findDOMNode(labelRef.current);
      setLabelWidth(labelNode != null ? labelNode.offsetWidth : 0);
    }
  }, [variant]);

  warning(
    !select || Boolean(children),
    'Material-UI: `children` must be passed when using the `TextField` component with `select`.',
  );

  const InputMore = {};

  if (variant === 'outlined') {
    if (InputLabelProps && typeof InputLabelProps.shrink !== 'undefined') {
      InputMore.notched = InputLabelProps.shrink;
    }

    InputMore.labelWidth = labelWidth;
  }

  const helperTextId = helperText && id ? `${id}-helper-text` : undefined;
  const InputComponent = variantComponent[variant];
  const InputElement = (
    <InputComponent
      aria-describedby={helperTextId}
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      classes={{
        root: classes.outlinedInput,
        focused: classes.focused,
        notchedOutline: classes.notchedOutline,
      }}
      defaultValue={defaultValue}
      fullWidth={fullWidth}
      multiline={multiline}
      name={name}
      rows={rows}
      rowsMax={rowsMax}
      type={type}
      value={value}
      id={id}
      inputRef={inputRef}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      placeholder={placeholder}
      inputProps={inputProps}
      {...InputMore}
      {...InputProps}
    />
  );

  return (
    <FormControl
      className={clsx(classes.root, classNameProp)}
      error={error}
      fullWidth={fullWidth}
      ref={ref}
      required={required}
      variant={variant}
      {...other}
    >
      {label && (
        <InputLabel
          style={{
            color: '#fff',
            '&:focus,&:hover': {
              color: '#fff',
            }
          }}
          htmlFor={id}
          ref={labelRef}
          {...InputLabelProps}
        >
          {label}
        </InputLabel>
      )}
      {select ? (
        <Select aria-describedby={helperTextId} value={value} input={InputElement} {...SelectProps}>
          {children}
        </Select>
      ) : (
        InputElement
      )}
      {helperText && (
        <FormHelperText id={helperTextId} {...FormHelperTextProps}>
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
});

TextField.propTypes = {
  autoComplete: PropTypes.string,
  autoFocus: PropTypes.bool,
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  FormHelperTextProps: PropTypes.object,
  fullWidth: PropTypes.bool,
  helperText: PropTypes.node,
  id: PropTypes.string,
  InputLabelProps: PropTypes.object,
  InputProps: PropTypes.object,
  inputProps: PropTypes.object,
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  label: PropTypes.node,
  margin: PropTypes.oneOf(['none', 'dense', 'normal']),
  multiline: PropTypes.bool,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  rows: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  rowsMax: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  select: PropTypes.bool,
  SelectProps: PropTypes.object,
  type: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])),
  ]),
  variant: PropTypes.oneOf(['standard', 'outlined', 'filled']),
};

TextField.defaultProps = {
  margin: 'dense',
  required: false,
  select: false,
  variant: 'outlined',
};

export default withStyles(styles, { name: 'MuiTextField' })(TextField);
