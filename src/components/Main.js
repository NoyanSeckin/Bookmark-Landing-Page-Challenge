import {Box, Grid, Button, Typography} from '@mui/material'
import React from 'react'
import Hero from '../icons/Hero'
import MainFeatures from './MainFeatures'
import MainExtension from './MainExtension'
import MainFAQ from './MainFAQ'

const blueBackgroundStyle = {
  backgroundColor: 'primary.main', 
  position: 'absolute', 
  borderTopLeftRadius: '50%',
  borderBottomLeftRadius: '35%',
  width: '100%', 
  height: '350px', 
  bottom: '-50px',
  right: '-220px',
  zIndex: -1
}

const chromeBtnStyle = {
  backgroundColor: 'primary.main', 
  color: '#fff',
  mr: 1, 
  py: 1,
  '&:hover': {
    color: 'primary.main'
  }
}

const firefoxBtnStyle = {
  backgroundColor: '#fff', 
  color: 'grayishBlue', 
  border: '1px solid #fff',

  py: 1,
  '&:hover': {
    backgroundColor: '#fff',
    borderColor: '#000'
  }
}

const leftGridItemStyle = {
  display: 'flex', 
  alignItems: 'center', 
  order: {xs: 2, lg: 1}
}

const rightGridItemStyle = {
  display: 'flex', 
  justifyContent: {xs: 'start', lg: 'end'}, 
  position: 'relative', 
  order: {xs: 1, lg: 2}
}

export default function Main() {

  function renderLeftGridItem(){
    return(
      <Grid item lg={6} xs={12} sx={leftGridItemStyle}>
       <Box sx={{ml: {xs: 0, lg: 10}}}>
       <Typography variant='h2'>
          A Simple Bookmark Manager
        </Typography>
        <Typography sx={{my: 4, color: 'gray', width: '70%', fontSize: '18px'}}>
          A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.
        </Typography>
        <Button variant='outlined' sx={chromeBtnStyle}>Get it on Chrome</Button>
        <Button variant='contained' sx={firefoxBtnStyle}>Get it on Firefox</Button>
       </Box>
      </Grid>
    )
  }

  function renderRightGridItem(){
    return(
      <Grid item lg={6} xs={12} sx={rightGridItemStyle}>
          <Hero/>
          {/* <Box sx={blueBackgroundStyle}>
          </Box> */}
      </Grid>
    )
  }

  function renderIntro(){
    return(
      <Grid container sx={{pt: 12}}>
      {renderLeftGridItem()}
      {renderRightGridItem()}
     </Grid>
    )
  }

  return (
   <Box>
     {renderIntro()}
     <MainFeatures/>
     <MainExtension/>
     <MainFAQ/>
   </Box>
  )
}
