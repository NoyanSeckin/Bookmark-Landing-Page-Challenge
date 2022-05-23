import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Bookmark from '../icons/Bookmark'
import MobileNavModal from './MobileNavModal'


const loginBtnStyle = {
  backgroundColor: 'warning.main', 
  color: '#fff', 
  px: 4,
  '&:hover': {
    backgroundColor: '#fff',
    color: 'warning.main',
    borderColor: 'warning.main',
    
  }
}

const navStyle = {
  alignSelf: 'center', 
  fontWeight: '500',
  '&:hover': {
    cursor: 'pointer',
    color: 'grayishBlue'
  }
}

const rightNavContainer = {
  display: {xs: 'none', lg: 'flex'}, 
  gap: 5, 
  alignSelf: 'center'
}

const navbarContainer = { 
  flexGrow: 1, 
  px: {xs: 0, lg: 8}, 
  pt: 2,
}

const hamburgerIconStyle = {
  fontSize: '30px', 
  display: {xs: 'block', lg: 'none'}
}

export default function NavBar() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  const navItems = ['FEATURES', 'PRICING', 'CONTACT'];
  function renderRightNavLinks(){
    return navItems.map(nav => 
    <Typography sx={navStyle}>
      {nav}
    </Typography>)
  }

  function renderRightNav(){
    return(
      <Box sx={rightNavContainer}>
      {renderRightNavLinks()}
      <Button variant='outlined' sx={loginBtnStyle}>LOGIN</Button>
    </Box>
    )
  }

  function renderHamburgerIcon(){
    return(
     
      <MenuIcon onClick={handleOpen}
       sx={hamburgerIconStyle} />
    )
  }

  return (
    <Box sx={navbarContainer}>
      <AppBar elevation={0} position="static">
        <Toolbar sx={{background: '#fff', color: '#000', justifyContent: 'space-between'}}>
          <Bookmark textColor='#242A45'/>
          {renderRightNav()}
          {renderHamburgerIcon()}
          
        </Toolbar>
      </AppBar>
      <MobileNavModal navItems={navItems} open={open} setOpen={setOpen}/>
    </Box>
  );
}