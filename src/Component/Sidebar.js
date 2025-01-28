import React from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Typography,
  Divider,
  Paper,
} from '@mui/material';
import {
  CalendarToday as CalendarTodayIcon,
  Assignment as AssignmentIcon,
  Star as StarIcon,
  FormatListBulleted as FormatListBulletedIcon,
  Person as PersonIcon,
  Add as AddIcon,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
 
import './Sidebar.css';

const Sidebar = () => {
  const drawerWidth = 240;

  const DemoPaper = styled(Paper)(({ theme }) => ({
    width: '80%',
    margin: '10px auto',
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
  }));

  return (
    <>
    
      
      <Box
        sx={{
          
          alignItems: 'center',
           
        }}
      >
        <Avatar
          src="./profile.png"
          alt="Profile"
          sx={{ width: 80, height: 80, left:123  }}
        />
        <Typography variant="subtitle1"  sx={{textAlign:"center" , position: "absolute" ,left:123}}>Hey, ABCD</Typography>

      </Box>
      
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#f5f9f5',
            border: 'none',
            mt: 14,
            ml: 4,
            zIndex: -1
             
           
          },
        }}
      >

        <Divider  sx={{  marginTop:"100px" , position:"sticky"}}/>

        

        <List>
          <DemoPaper variant="elevation" sx={{ height: 250  }}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="All Tasks" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton sx={{ bgcolor: 'rgba(0, 128, 0, 0.1)' }}>
                <ListItemIcon>
                  <CalendarTodayIcon sx={{ color: 'green' }} />
                </ListItemIcon>
                <ListItemText primary="Today" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText primary="Important" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <FormatListBulletedIcon />
                </ListItemIcon>
                <ListItemText primary="Planned" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="Assigned to me" />
              </ListItemButton>
            </ListItem>
          </DemoPaper>
        </List>

        <List>
          <Divider />
          <DemoPaper variant="elevation" sx={{ height: 40, mt: 3 }}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AddIcon />
                </ListItemIcon>
                <ListItemText primary="Add list" />
              </ListItemButton>
            </ListItem>
          </DemoPaper>
        </List>

        <Box sx={{ textAlign: 'center', mt: 'auto', p: 2 }}>
          <Typography variant="subtitle2" color="textSecondary">
            Today Tasks
          </Typography>
          <Typography variant="h6" fontWeight="bold" mt={1}>
            11
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default Sidebar;
