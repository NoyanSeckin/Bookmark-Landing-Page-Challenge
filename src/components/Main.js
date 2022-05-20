import {Box, Grid, Button, Typography} from '@mui/material'
import React, {useState} from 'react'
import Hero from '../icons/Hero'

export default function Main() {

  const [activeNav, setActiveNav] = useState('Simple Bookmarking')

  function renderLeftGridItem(){
    return(
      <Grid item lg={6} xs={12}>
        <Typography variant='h2'>
          A Simple Bookmark Manager
        </Typography>
        <Typography sx={{my: 4, color: 'gray', width: '60%'}}>
          A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.
        </Typography>
        <Button variant='contained' sx={{backgroundColor: 'primary.main', mr: 1, py: 1}}>Get it on Chrome</Button>
        <Button variant='contained' sx={{backgroundColor: '#fff', color: 'grayishBlue', py: 1}}>Get it on Firefox</Button>
      </Grid>
    )
  }

  function renderRightGridItem(){
    return(
      <Grid item lg={6} xs={12} sx={{display: 'flex', justifyContent: 'end'}}>
          <Hero/>
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

  function renderFeatures(){
    return(
      <Box sx={{display: 'flex',  flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 3}}>
        <Typography variant='h4' sx={{fontWeight: '500'}}>Features</Typography>
        <Typography sx={{color: 'gray', width: '30%'}}>Our aim is to make quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</Typography>
        <Box sx={{display: 'flex', gap: 3}}>
        {renderNavs()}
        </Box>
        <hr className='features-hr'/>
      </Box>
    )
  }

  function renderNavs(){
    const navs = ['Simple Bookmarking', 'Speedy Searching', 'Easy Sharing'];
    return navs.map(nav => 
      <Typography sx={{px: 3, pb: 3}}
      className={nav === activeNav && 'active-nav'} 
      onClick={()=> setActiveNav(nav)}>{nav}</Typography>
      )
  }

  

  return (
   <Box>
     {renderIntro()}
     {renderFeatures()}
    
   </Box>
  )
}
