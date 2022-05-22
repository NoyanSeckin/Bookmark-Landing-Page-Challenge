import SvgIcon from '@mui/material/SvgIcon';
import React from 'react'

export default function Error({isError}) {
  const iconStyle = {
    position: 'absolute', 
    right: '130px', 
    top: '10px', 
    display: !isError && 'none',
    zIndex: '3',
  }

  return (
    <SvgIcon sx={iconStyle} xmlns="http://www.w3.org/2000/svg" width="20" height="20"><g fill="none" fill-rule="evenodd"><circle cx="10" cy="10" r="10" fill="#FA5959"/><g fill="#FFF" transform="translate(9 5)"><rect width="2" height="7" rx="1"/><rect width="2" height="2" y="8" rx="1"/></g></g></SvgIcon>
  )
}
