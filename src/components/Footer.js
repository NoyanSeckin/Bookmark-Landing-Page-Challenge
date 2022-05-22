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
  gap: 3,
  py: 7
}

const btnStyle = {
  backgroundColor: 'warning.main', 
  color: '#fff', 
  ml: 2, 
  px: 2, 
  py: 1,
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
  pr: 4.4, 
  pl: 1,
  borderBottomRightRadius: '5px',
  borderBottomLeftRadius: '5px',
  top: '38px',

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
        <Typography sx={{...headerStyle, fontSize: '10px', letterSpacing: '0.3rem'}}>35.000+ ALREADY JOINED</Typography>
        <Typography variant='h5' sx={{...headerStyle, width: {md: '35%', lg: '25%'}}}>Stay up-to-date with what we're doing</Typography>
        <Box sx={{position: 'relative'}}>
          <input type="email" placeholder='Enter your email address' className='footer-input' value={userInput} onChange={(e)=> handleChange(e)}/>
          <Error isError={inputAlert}/>
          <Box sx={{...alertContainerStyle, display: !inputAlert && 'none'}}>{inputAlert}</Box> 
          <Button variant='outlined' sx={btnStyle} onClick={handleClick}>Contact Us</Button>
        </Box>
      </Box>
    )
  }

  function renderFooter(){
    return(
      <Box sx={{backgroundColor: 'primary.dark', py: 4}}>
        <Container maxWidth='xl' sx={{display: 'flex', justifyContent: 'space-between'}}>
          <Box sx={{display: 'flex', gap: 5, pl: {lg: 15, xl: 0}}}>
            <Bookmark textColor='#fff'/>
            <Box sx={{alignSelf: 'center', display: 'flex', gap: 5}}>
            <Typography sx={navStyle}>FEATURES</Typography>
            <Typography sx={navStyle}>PRICING</Typography>
            <Typography sx={navStyle}>CONTACT</Typography>
            </Box>
          </Box>
          <Box sx={{pr: {lg: 15, xl: 0}}}>
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
