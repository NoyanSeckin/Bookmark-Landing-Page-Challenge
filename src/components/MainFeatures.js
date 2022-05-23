import {Box, Grid, Button, Typography} from '@mui/material'

import React, {useState} from 'react'
import Illustration1 from '../icons/Illustration1'
import Illustration2 from '../icons/Illustration2'
import Illustration3 from '../icons/Illustration3'
import CenterHeaderComponent from './CenterHeaderComponent'

const featuresContainer = {
  display: 'flex',  
  flexDirection: 'column', 
  alignItems: 'center', 
  gap: 3, 
  mt: 17
}

const moreInfoBtn = {
  backgroundColor: 'primary.main', 
  color: '#fff', 
  py: 1.5, 
  px: 2.5,
  '&:hover': {
    backgroundColor: 'primary.main'
  }
}

const rightGridStyle = {
  display: {xs: 'none', lg: 'flex'}, 
  justifyContent: 'center', 
  alignItems: 'center',
  mt: {xs: 8, lg: 0}
}

const blueBackground = {
  position: 'absolute',
  backgroundColor: 'primary.main',
  height: '350px',
  left: '-220px',
  top: '100px',
  width: '116%',
  zIndex: '-1',
  borderTopRightRadius: '35%',
  borderBottomRightRadius: '35%'
  
}

const leftGridStyle = {
  display: {xs: 'none', lg: 'flex'}, 
  justifyContent: 'end', 
  position: 'relative', 
  height: '346px'
}

const navsContainerStyle = {
  display: {xs: 'none', lg: 'flex'}, 
  gap: 3, 
  mt: 4, 
  position: 'relative',
}

const navStyle = {
  color: 'grayishBlue',
  fontSize: {xs: '1.25rem', lg: '1rem'},
  mt: {xs: 1.5, lg: 0},
  px: {xs: 2, lg: 4}, 
  pb: {xs: 1.5, lg: 3}, 
  '&:hover':{
    color: 'warning.main',
    cursor: 'pointer'
  }
}

const mobileNavsContainerStyle = {
  display: {xs: 'flex', lg: 'none'}, 
  flexDirection: 'column', 
  textAlign: 'center',
  width: '98%',
}

const mobileImagesContainer = {
  display: {xs: 'flex', lg: 'none'},
  position: 'relative',
  mb: 10
}

const mobileBackgroundStyle = {
  position: 'absolute',
  backgroundColor: 'primary.main',
  height: '240px',
  width: '100%',
  zIndex: '-1',
  left: '-20px',
  bottom: '-35px',
  borderTopRightRadius: '35%',
  borderBottomRightRadius: '35%'
}

export default function MainFeatures() {
  const [activeNav, setActiveNav] = useState('Simple Bookmarking')

  const centerHeader = "Features"
  const centerText= "Our aim is to make quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go."

  const bookmarkHeader = 'Bookmark in one click'
  const bookmarkText = 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'

  function renderFeatures(){
    return(
      <Box sx={featuresContainer}>
        <CenterHeaderComponent header={centerHeader} text={centerText}/>
        <Box sx={navsContainerStyle}>
        {renderNavs()}
        <hr className='features-hr'/>
        </Box>
        <Box sx={mobileNavsContainerStyle}>
          <hr width='100%' className='mobile-features-hr'/>
          {renderNavs()}
        </Box>
      </Box>
    )
  }

  function renderNavs(){
    const navs = ['Simple Bookmarking', 'Speedy Searching', 'Easy Sharing'];
    return navs.map(nav => 
      <Box>
        <Typography sx={navStyle}
        className={nav === activeNav && 'active-nav'} 
        onClick={()=> setActiveNav(nav)}>{nav}</Typography>
        <Box sx={{display: {xs: 'block', lg: 'none'}}}>
          <hr className='mobile-features-hr'/>
        </Box>
      </Box>
      )
  }

  function renderSvgs(){
    if(activeNav === 'Simple Bookmarking'){
      return <Illustration1/>
    }else if(activeNav === 'Speedy Searching'){
      return <Illustration2/>
    } else return <Illustration3/>
  }

  function renderMobileImages(){
    const width = '100%'
    if(activeNav === 'Simple Bookmarking'){
      return <img width={width} src={require('../images/illustration-1.png')} alt=''/>
    }else if(activeNav === 'Speedy Searching'){
      return <img width={width} src={require('../images/illustration-2.png')} alt=''/>
    } else return <img width={width} src={require('../images/illustration-3.png')} alt=''/>
  }


  function renderRightGrid(){
    return(
      <Box sx={{width: '60%'}}>
      <Typography variant='h5' sx={{fontWeight: '500'}}>  
        {bookmarkHeader}
      </Typography>
      <Typography sx={{my: 3, color: 'gray', width: '87%'}}>
        {bookmarkText}
      </Typography>
      <Button variant='contained' sx={moreInfoBtn}>More Info</Button>
      </Box>
    )
  }

  function renderDesktopGrid(){
    return(
      <Grid container sx={{mt: 10, display: {xs: 'none', lg: 'block'}}}>
        <Grid item lg={6} sx={leftGridStyle}>
          {renderSvgs()}
          <Box sx={blueBackground}></Box>
        </Grid>
        <Grid item lg={6} sx={rightGridStyle}>
         {renderRightGrid()}
        </Grid>
      </Grid>
    )
  }

  function renderMobileGrid(){
    return(
      <Grid container sx={{mt: 10, display: {xs: 'block', lg: 'none'}}}>
        <Grid item xs={12} sx={mobileImagesContainer}> 
          {renderMobileImages()}
          <Box sx={mobileBackgroundStyle}></Box>
        </Grid>
        <Grid item xs={12}> 
          <CenterHeaderComponent header={bookmarkHeader} text={bookmarkText}/> 
        </Grid>
      </Grid>
    )
  }

  return (
    <Box sx={{mt: 17}}>
      {renderFeatures()}
      {renderDesktopGrid()}
      {renderMobileGrid()}
    </Box>
  )
}
