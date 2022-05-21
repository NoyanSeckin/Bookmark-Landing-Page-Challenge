import {Box, Grid, Button, Typography} from '@mui/material'

import React, {useState} from 'react'
import Illustration1 from '../icons/Illustration1'
import Illustration2 from '../icons/Illustration2'
import Illustration3 from '../icons/Illustration3'
import CenterHeaderComponent from './CenterHeaderComponent'

const moreInfoBtn = {
  backgroundColor: 'primary.main', 
  color: '#fff', 
  py: 1.5, 
  px: 2.5,
}

const rightGridContainer = {
  display: 'flex', 
  justifyContent: 'center', 
  alignItems: 'center'
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

export default function MainFeatures() {
  const [activeNav, setActiveNav] = useState('Simple Bookmarking')

  const centerHeader = "Features"
  const centerText= "Our aim is to make quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go."

  function renderNavs(){
    const navs = ['Simple Bookmarking', 'Speedy Searching', 'Easy Sharing'];
    return navs.map(nav => 
      <Typography sx={{px: 4, pb: 3}}
      className={nav === activeNav && 'active-nav'} 
      onClick={()=> setActiveNav(nav)}>{nav}</Typography>
      )
  }

  function renderTab(){
    if(activeNav === 'Simple Bookmarking'){
      return  <Illustration1/>
    }else if(activeNav === 'Speedy Searching'){
      return <Illustration2/>
    } else return <Illustration3/>
  }

  function renderRightGrid(){
    return(
      <Box sx={{width: '60%'}}>
      <Typography variant='h5' sx={{fontWeight: '500'}}>  
        Bookmark in one click
      </Typography>
      <Typography sx={{my: 3, color: 'gray', width: '87%'}}>
        Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.
      </Typography>
      <Button variant='contained' sx={moreInfoBtn}>More Info</Button>
      </Box>
    )
  }

  function renderTabGrid(){
    return(
      <Grid container sx={{mt: 10}}>
        <Grid item lg={6} sx={{display: 'flex', justifyContent: 'end', position: 'relative', height: '346px'}}>
          {renderTab()}
          <Box sx={blueBackground}></Box>
        </Grid>
        <Grid item lg={6} sx={rightGridContainer}>
         {renderRightGrid()}
        </Grid>
      </Grid>
    )
  }

  return (
    <Box sx={{mt: 17}}>
      {/* {renderFeatures()} */}
      <CenterHeaderComponent header={centerHeader} text={centerText}/>
      {renderTabGrid()}
    </Box>
  )
}
