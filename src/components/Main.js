import {Box, Grid, Button, Typography} from '@mui/material'
import React, {useState} from 'react'
import Hero from '../icons/Hero'
import MainFeatures from './MainFeatures'

const blueBackgroundStyle = {
  backgroundColor: 'primary.main', 
  position: 'absolute', 
  borderTopLeftRadius: '50%',
  borderBottomLeftRadius: '35%',
  width: '100%', 
  height: '350px', 
  bottom: '-50px',
  right: '-300px',
  zIndex: -1
}


export default function Main() {


  function renderLeftGridItem(){
    return(
      <Grid item lg={6} xs={12} sx={{display: 'flex', alignItems: 'center', }}>
       <Box sx={{ml: 10}}>
       <Typography variant='h2'>
          A Simple Bookmark Manager
        </Typography>
        <Typography sx={{my: 4, color: 'gray', width: '70%', fontSize: '18px'}}>
          A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.
        </Typography>
        <Button variant='contained' sx={{backgroundColor: 'primary.main', mr: 1, py: 1}}>Get it on Chrome</Button>
        <Button variant='contained' sx={{backgroundColor: '#fff', color: 'grayishBlue', py: 1}}>Get it on Firefox</Button>
       </Box>
      </Grid>
    )
  }

  function renderRightGridItem(){
    return(
      <Grid item lg={6} xs={12} sx={{display: 'flex', justifyContent: 'end', position: 'relative'}}>
          <Hero/>
          <Box sx={blueBackgroundStyle}>

          </Box>
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
    
    
   </Box>
  )
}
