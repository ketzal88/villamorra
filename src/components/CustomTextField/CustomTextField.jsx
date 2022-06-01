import React from 'react'
import { TextField } from '@mui/material'

const CustomTextField = ({
  value,
  onChange,
  variant = 'filled',
  label,
  isFullWidth = true,
  isRequired,
  inputHeight = '85px',
  labelColor = 'white',
  containerStyles = {},
  labelStyles = {},
  inputStyles = {},
  fontSize = '30px',
  ...rest
}) => {
  return (
    <TextField
      required={isRequired}
      value={value}
      onChange={onChange}
      variant={variant}
      fullWidth={isFullWidth}
      label={label}
      InputProps={{
        sx: {
          height: inputHeight,
        }
      }}
      InputLabelProps={{
        sx: {
          fontSize: fontSize,
          lineHeight: '1em',
          fontWeight: '300',
          color: labelColor,
          ...labelStyles
        }
      }}
      inputProps={{
        style: {
          height: inputHeight,
          color: labelColor,
          fontSize: fontSize,
          fontWeight: '300',
          paddingLeft: '0px',
          ...inputStyles
        }
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
    />
  )
}

export default CustomTextField