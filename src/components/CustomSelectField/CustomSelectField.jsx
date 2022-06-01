import React from 'react'
import { MenuItem, TextField } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const CustomSelectField = ({
  value,
  onChange,
  variant = 'filled',
  label,
  isFullWidth = true,
  isRequired,
  inputHeight = '85px',
  labelColor = 'white',
  options,
  containerStyles = {},
  fontSize = '30px',
  ...rest
}) => {
  return (
    <TextField
      required={isRequired}
      value={value}
      select
      onChange={onChange}
      variant={variant}
      fullWidth={isFullWidth}
      label={label}
      InputProps={{
        sx: {
          height: inputHeight,
          paddingLeft: 0,
        }
      }}
      InputLabelProps={{
        sx: {
          fontSize: fontSize,
          lineHeight: '1em',
          fontWeight: '300',
          //top: value ? '0px' : '10px',
          color: labelColor
        }
      }}
      inputProps={{
        style: {
          height: inputHeight,
          color: labelColor,
          fontSize: fontSize,
          fontWeight: '300',
          paddingLeft: '0px',
        }
      }}
      SelectProps={{
        SelectDisplayProps: {
          style: {
            display: 'flex',
            alignItems: 'center',
            fontSize: fontSize,
            fontWeight: '300',
            lineHeight: '1em',
            height: inputHeight,
            color: labelColor
          }
        },
        IconComponent: props => <KeyboardArrowDownIcon {...props} sx={{color: '#F1804F !important'}} />
      }}
      sx={{
        height: inputHeight,
        '& .MuiFilledInput-underline:before': {
          borderBottom: '4px solid #F1804F'
        },
        '& .MuiFilledInput-underline:after': { 
          borderBottom: '4px solid #F1804F'
        },
        '& .MuiFilledInput-underline:hover:not(.Mui-disabled):before': {
          borderBottom: '4px solid #F1804F'
        },
        '& .MuiFilledInput-underline:hover:not(.Mui-disabled):after': {
          borderBottom: '4px solid #F1804F'
        },
        '& .MuiFilledInput-root': {
          backgroundColor: 'unset'
        },
        '& .MuiFilledInput-root:hover': {
          backgroundColor: 'unset'
        },
        '& .MuiFilledInput-input:focus': {
          backgroundColor: 'unset'
        },
        px: '12px',
        ...containerStyles
      }}
      {...rest}
    >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
    </TextField>
  )
}

export default CustomSelectField