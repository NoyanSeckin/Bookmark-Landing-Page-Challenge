import {Box, Card, CardContent, CardMedia, CardActions, Button, Typography} from '@mui/material'

import React from 'react'
import Chrome from '../icons/Chrome'
import Firefox from '../icons/Firefox'
import Opera from '../icons/Opera'

export default function MainExtensionjs() {

  function renderExtensionText(){
    return(
      <Box sx={{alignItems: 'center', textAlign: 'center'}}>
        <Typography>Download the extension</Typography>
        <Typography>
          We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize
        </Typography>
      </Box>
    )
  }

  function renderCard(Icon, header, text){
    return(
      <Card sx={{maxWidth: '250px', display: 'flex', flexDirection: 'column', alignItems: 'center', py: 2, px: 2}}>
        <Icon/>
        <CardContent> 
          <Typography variant='h6'>Add to {header}</Typography>
          <Typography sx={{color: 'gray', fontSize: '15px'}}>Minimum version {text}</Typography>
        </CardContent>
        <CardActions>
          <Button variant='contained' sx={{backgroundColor: 'primary.main'}}>Add & Install Extension</Button>
        </CardActions>
      </Card>
    )
  }

  function renderCards(){
    return(
      <Box sx={{display: 'flex', justifyContent: 'center'}}>
        {renderCard(Chrome, 'Chrome', '62')}
      </Box>
    )
  }

  return (
    <Box sx={{mt: '15rem'}}>
      {renderExtensionText()}
      {renderCards()}
    </Box>
  )
}
