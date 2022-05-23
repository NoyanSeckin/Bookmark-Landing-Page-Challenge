import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';

import Bookmark from '../icons/Bookmark'
import Facebook from '../icons/Facebook'
import Twitter from '../icons/Twitter'

const style = {
  position: 'relative',
  bgcolor: 'primary.dark',
  border: '2px solid #000',
  boxShadow: 24,
  height: '100vh',
  opacity: '0.97',
  minWidth: '86vw',
  px: 3.5,
  py: 4
};

const loginBtnStyle = {
  width: '100%', 
  py: 1.2, 
  mt: 2, 
  color: '#fff', 
  borderColor: '#fff', 
  fontSize: '17px', 
  letterSpacing: '4px',
}

const navLinkStyle = {
  color: '#fff', 
  fontWeight: 'normal', 
  my: 2
}

const bottomIconsStyle = {
  textAlign: 'center', 
  position: 'absolute', 
  bottom: '100px', 
  left: '150px'
}

export default function BasicModal({navItems, open, setOpen}) {
  const handleClose = () => setOpen(false);

  function renderTopIcons(){
    return(
      <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Bookmark textColor='#fff'/>
        <CloseIcon sx={{color: '#fff'}} onClick={handleClose}/>
      </Box>
    )
  }

  function renderNavItems(){
    return(
      navItems.map(nav => 
        <Box sx={{position: 'relative'}}>
          <hr className='mobile-nav-hr' />
          <Typography variant='h6' sx={navLinkStyle}>
            {nav}
          </Typography>
        </Box>
        )
    )
  }
  

  function renderNavsContainer(){
    return(
      <Box sx={{textAlign: 'center', mt: 5}}>
        {renderNavItems()}
        <hr className='mobile-nav-hr' />
        <Button variant='outlined' sx={loginBtnStyle}>
          LOGIN
        </Button>
      </Box>
    )
  }
  
  function renderBottomIcons(){
    return(
      <Box sx={bottomIconsStyle}>
        <Facebook/>
        <Twitter/>
      </Box>
    )
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {renderTopIcons()}
          {renderNavsContainer()}
          {renderBottomIcons()}
        </Box>
      </Modal>
    </div>
  );
}
