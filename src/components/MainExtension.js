import {Box, Card, CardContent, CardMedia, CardActions, Button, Typography} from '@mui/material'

import React from 'react'
import CenterHeaderComponent from './CenterHeaderComponent'
import Chrome from '../icons/Chrome'
import Firefox from '../icons/Firefox'
import Opera from '../icons/Opera'
import BgDots from '../icons/BgDots'

export default function MainExtensionjs() {

  const centerHeader = 'Download the extension';
  const centerText = "We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize";

  function renderCard(Icon, header, text, alignSelf){
    return(
      <Card sx={{maxWidth: '250px', display: 'flex', flexDirection: 'column', alignItems: 'center', pt: 4, pb: 1, px: 0, alignSelf}}>
        <Icon/>
        <CardContent> 
          <Typography variant='h6'>Add to {header}</Typography>
          <Typography sx={{color: 'gray', fontSize: '14px', mb: 2}}>Minimum version {text}</Typography>
        </CardContent>
        <BgDots/>
        <CardActions sx={{mt: 2}}>
          <Button variant='contained' sx={{backgroundColor: 'primary.main', py: 1.3, px: 4}}>Add & Install Extension</Button>
        </CardActions>
      </Card>
    )
  }

  function renderCards(){
    return(
      <Box sx={{display: 'flex', justifyContent: 'center', gap: 5, height: '370px', mt: 7}}>
        {renderCard(Chrome, 'Chrome', '62', 'start')}
        {renderCard(Firefox, 'Firefox', '55', 'center')}
        {renderCard(Opera, 'Opera', '46', 'end')}
      </Box>
    )
  }

  return (
    <Box sx={{mt: '15rem'}}>
      <CenterHeaderComponent header={centerHeader} text={centerText}/>
      {renderCards()}
    </Box>
  )
}
