import {Box, Typography} from '@mui/material'

import React from 'react'

const containerStyle = {
  display: 'flex', 
  flexDirection: 'column', 
  alignItems: 'center', 
  textAlign: 'center', 
  gap: 2
}

const headerStyle = {
  fontWeight: '500',
  width: {xs: '90%', lg: '100%'}
}

const textStyle = {
  color: 'gray', 
  width: {xs: '100%', lg: '35%'}
}

export default function CenterHeaderComponent({header, text}) {
  function renderExtensionText(){
    return(
      <Box sx={containerStyle}>
        <Typography variant='h5' sx={headerStyle}>{header}</Typography>
        <Typography sx={textStyle}>
          {text}
        </Typography>
      </Box>
    )
  }
  return (
    <div>{renderExtensionText(header, text)}</div>
  )
}
