import {Box, Card, CardContent, CardActions, Button, Typography} from '@mui/material'

import React from 'react'
import CenterHeaderComponent from './CenterHeaderComponent'
import Chrome from '../icons/Chrome'
import Firefox from '../icons/Firefox'
import Opera from '../icons/Opera'
import BgDots from '../icons/BgDots'

const extensionBtnStyle = {
  backgroundColor: 'primary.main', 
  color: '#fff',
  py: 1.3, 
  px: 4,
  '&:hover': {
    backgroundColor: '#fff',
    color: 'primary.main'
  }
}

const cardsContainer = {
  display: 'flex', 
  justifyContent: 'center', 
  gap: 5, 
  height: '370px', 
  mt: 7,
  flexWrap: 'wrap',
}

const cardStyle = {
  maxWidth: '250px', 
  borderRadius: '8px',
  display: 'flex', 
  flexDirection: 'column', 
  alignItems: 'center', 
  pt: 4,
  pb: 1, 
  px: 0
}

const minVersionStyle = {
  color: 'gray', 
  fontSize: '14px', 
  mb: 2
}

export default function MainExtensionjs() {

  const centerHeader = 'Download the extension';
  const centerText = "We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize";

  function renderCard(Icon, header, text, alignSelf){
    return(
      <Card elevation={3} sx={{...cardStyle, alignSelf}}>
        <Icon/>
        <CardContent> 
          <Typography variant='h6'>Add to {header}</Typography>
          <Typography sx={minVersionStyle}>Minimum version {text}</Typography>
        </CardContent>
        <BgDots/>
        <CardActions sx={{mt: 2}}>
          <Button variant='outlined' sx={extensionBtnStyle}>Add & Install Extension</Button>
        </CardActions>
      </Card>
    )
  }

  function renderCards(){
    return(
      <Box sx={cardsContainer}>
        {renderCard(Chrome, 'Chrome', '62', 'start')}
        {renderCard(Firefox, 'Firefox', '55', 'center')}
        {renderCard(Opera, 'Opera', '46', 'end')}
      </Box>
    )
  }

  return (
    <Box sx={{mt: '15rem', mb: {xs: '50rem', lg: 0}}}>
      <CenterHeaderComponent header={centerHeader} text={centerText}/>
      {renderCards()}
    </Box>
  )
}
