import {Box, Button, Container, Typography} from '@mui/material'

import React, {useState} from 'react'
import Bookmark from '../icons/Bookmark'
import Facebook from '../icons/Facebook'
import Twitter from '../icons/Twitter'
import Error from '../icons/Error'

const headerStyle = {
  color: '#fff'
}

const headerContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  gap: {xs: 1, lg: 3},
  py: 7
}

const btnStyle = {
  backgroundColor: 'warning.main',
  color: '#fff', 
  ml: {xs: 0, lg: 2}, 
  py: 1,
  mt: {xs: 2, lg: '0'},
  width: {xs: '100%', lg: '60%'},
  '&:hover':{
    backgroundColor: '#fff',
    borderColor: 'warning.main',
    color: 'warning.main'
  }
}

const navStyle = {
  color: 'lightGray', 
  fontSize: '14px',
  '&:hover': {
    color: 'warning.main',
    cursor: 'pointer'
  }
}

const alertContainerStyle = {
  position: 'absolute', 
  backgroundColor: 'warning.main', 
  color: '#fff', 
  fontSize: '13px', 
  py: 0.7, 
  pl: 0.3,
  pr: '1.2rem',
  borderBottomRightRadius: '5px',
  borderBottomLeftRadius: '5px',
  top: '38px',
  width: '100%',
  boxSizing: 'border-box'
}

const inputAndBtnContainer = {
  display: 'flex',
  flexDirection: {xs: 'column', lg: 'row'},
  mt: {xs: 3, lg: 0},
  width: {xs: '90%', lg: 'auto'},
}

const iconsAndNavsContainer = {
  display: 'flex', 
  flexDirection: {xs: 'column', lg: 'row'},
  gap: 5, 
  pl: {xs: 0,lg: 15, xl: 0},

}

const navsContainer = {
  alignSelf: 'center', 
  display: 'flex', 
  flexDirection: {xs: 'column', lg: 'row'},
  gap: {xs: 3,lg: 5},
  textAlign: {xs: 'center', lg: 'start'}
}

const containerStyle = {
  display: 'flex', 
  justifyContent: 'space-between',
  flexDirection: {xs: 'column', lg: 'row'},
  alignItems: {xs: 'center', lg: 'start'},
}

const twitterFacebookContainer = {
  pr: {xs: 0, lg: 15, xl: 0},
  mt: {xs: 5, lg: 0}
}

export default function Footer() {
  const [userInput, setUserInput] = useState('');
  const [inputAlert, setInputAlert] = useState("");
  
  function handleChange(event){
    setUserInput(event.target.value);
    inputAlert && setInputAlert('');
  }

  function handleClick(){
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!userInput || !userInput.match(validRegex)){
      setInputAlert("Whoops, make sure it's an email")
    }
  }

  function renderHeaderAndInput(){
    return(
      <Box sx={headerContainerStyle}>
        <Typography sx={{...headerStyle, fontSize: {xs: '13px', lg: '10px'}, letterSpacing: '0.3rem'}}>35.000+ ALREADY JOINED</Typography>
        <Typography variant='h5' sx={{...headerStyle, width: {xs: '95%', md: '35%', lg: '25%'}}}>Stay up-to-date with what we're doing</Typography>
        <Box sx={inputAndBtnContainer}>
          <Box sx={{width: '100%'}} className='footer-input-container'>
          <input type="email" placeholder='Enter your email address' className='footer-input' value={userInput} onChange={(e)=> handleChange(e)}/>
          <Error isError={inputAlert}/>
          <Box sx={{...alertContainerStyle, display: !inputAlert && 'none'}}>{inputAlert}</Box> 
          </Box>
          <Button variant='outlined' sx={{...btnStyle, mt: {xs: inputAlert ? 4 : 2, lg: 0}}} onClick={handleClick}>Contact Us</Button>
        </Box>
      </Box>
    )
  }

  function renderFooter(){
    return(
      <Box sx={{backgroundColor: 'primary.dark', py: 4}}>
        <Container maxWidth='xl' sx={containerStyle}>
          <Box sx={iconsAndNavsContainer}>
            <Bookmark textColor='#fff'/>
            <Box sx={navsContainer}>
            <Typography sx={navStyle}>FEATURES</Typography>
            <Typography sx={navStyle}>PRICING</Typography>
            <Typography sx={navStyle}>CONTACT</Typography>
            </Box>
          </Box>
          <Box sx={twitterFacebookContainer}>
            <Facebook/>
            <Twitter/>
          </Box>
        </Container>
      </Box>
    )
  }

  return (
    <Box sx={{backgroundColor: 'primary.main', mt: 15}}>
      {renderHeaderAndInput()}
      {renderFooter()}
    </Box>
  )
}
