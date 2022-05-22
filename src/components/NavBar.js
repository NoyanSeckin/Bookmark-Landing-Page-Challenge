import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Bookmark from '../icons/Bookmark'

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

export default function NavBar() {

  function renderRightNav(){
    const navItems = ['FEATURES', 'PRICING', 'CONTACT'];
    return navItems.map(nav => 
    <Typography sx={navStyle}>
      {nav}
    </Typography>)
  }

  return (
    <Box sx={{ flexGrow: 1, px: 8, pt: 2}}>
      <AppBar elevation={0} position="static">
        <Toolbar sx={{background: '#fff', color: '#000', justifyContent: 'space-between'}}>
          <Bookmark textColor='#242A45'/>
          <Box sx={{display: 'flex', gap: 5, alignSelf: 'center'}}>
            {renderRightNav()}
            <Button variant='outlined' sx={loginBtnStyle}>LOGIN</Button>
          </Box>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}