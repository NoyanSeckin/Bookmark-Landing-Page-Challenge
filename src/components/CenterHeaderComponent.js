import {Box, Typography} from '@mui/material'

import React from 'react'

export default function CenterHeaderComponent({header, text}) {
  function renderExtensionText(){
    return(
      <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 2}}>
        <Typography variant='h5' sx={{fontWeight: '500'}}>{header}</Typography>
        <Typography sx={{color: 'gray', width: '35%'}}>
          {text}
        </Typography>
      </Box>
    )
  }
  return (
    <div>{renderExtensionText(header, text)}</div>
  )
}
