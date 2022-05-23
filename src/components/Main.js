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

const mobileBackgroundStyle = {
  position: 'absolute',
  height: '200px',
  bgcolor: 'primary.main',
  width: '80%',
  top: '60px',
  right: '-16px',
  zIndex: -1,
  borderTopLeftRadius: '50%',
  borderBottomLeftRadius: '35%',
}

const chromeBtnStyle = {
  backgroundColor: 'primary.main', 
  color: '#fff',
  mr: 1, 
  py: {xs: 1.5, lg: 1},
  '&:hover': {
    color: 'primary.main'
  }
}

const firefoxBtnStyle = {
  backgroundColor: '#fff', 
  color: 'grayishBlue', 
  border: '1px solid #fff',
  py: {xs: 1.5, lg: 1},
  '&:hover': {
    backgroundColor: '#fff',
    borderColor: '#000'
  }
}

const leftGridItemStyle = {
  display: 'flex', 
  alignItems: 'center', 
  order: {xs: 2, lg: 1},
  textAlign: {xs: 'center', lg: 'start'},
  mt: {xs: 7, lg: 0}
}

const rightGridItemStyle = {
  display: 'flex', 
  justifyContent: {xs: 'start', lg: 'end'}, 
  position: 'relative', 
  order: {xs: 1, lg: 2},
}

const introTextStyle = {
  my: 4, 
  color: 'gray', 
  width: {xs: '100%', lg: '70%'}, 
  fontSize: '18px'
}

const introHeaderStyle = {
  fontSize: {xs: '2rem', lg: '3.75rem'},
  fontWeight: '500',
}
export default function Main() {

  function renderLeftGridItem(){
    return(
      <Grid item lg={6} xs={12} sx={leftGridItemStyle}>
       <Box sx={{ml: {xs: 0, lg: 10}}}>
       <Typography variant='h2' sx={introHeaderStyle}>
          A Simple Bookmark Manager
        </Typography>
        <Typography sx={introTextStyle}>
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
          <Box sx={{display: {xs: 'none', lg: 'block'}}}>
            <Hero/>
            <Box sx={blueBackgroundStyle}>
            </Box>
          </Box>
          <Box sx={{display: {xs: 'block', lg: 'none'}}}>
            <img width='100%' src={require('../images/illustration-hero.png')} alt="" />
            <Box sx={mobileBackgroundStyle}></Box>
          </Box>
      </Grid>
    )
  }

  function renderIntro(){
    return(
      <Grid container sx={{pt: {xs: 7, lg: 12}}}>
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
