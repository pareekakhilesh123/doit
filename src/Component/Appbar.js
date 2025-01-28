import React from 'react';
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Widgets as WidgetsIcon,
  DarkMode as DarkModeIcon,
  MoreVert as MoreIcon,
} from '@mui/icons-material';

export default function Appbar({ onToggleSidebar }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ bgcolor: 'white', color: 'black', boxShadow: 'none' }}
      >
        <Toolbar sx={{ boxShadow: 'none' }}>
     
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            sx={{ mr: 2 }}
            onClick={onToggleSidebar}  
          >
            <MenuIcon />
          </IconButton>
          <Avatar
            src="./logo.png"
            alt="Profile"
            sx={{ width: 44, height: 44, mx: 'auto' }}
          />
          <Typography>DoIt</Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" color="inherit">
              <Badge color="error">
                <SearchIcon />
              </Badge>
            </IconButton>
            <IconButton size="large" color="inherit">
              <Badge color="error">
                <WidgetsIcon />
              </Badge>
            </IconButton>
            <IconButton size="large" color="inherit">
              <DarkModeIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" color="inherit">
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
