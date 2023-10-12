import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import WcRoundedIcon from '@mui/icons-material/WcRounded';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <CameraAltIcon align='center'> </CameraAltIcon>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} align='center'>
            Photography
          </Typography>
          <WcRoundedIcon></WcRoundedIcon>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}



