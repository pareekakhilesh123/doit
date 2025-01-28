import React from "react";
import {
  Box,
  
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";


const Dropdown = () => {
  

  return (
    <Box
      sx={{
        p: 1,
        borderRadius: 2,
        height: 20,
        
      }}
    >
     
      <Box>
        <Typography
           sx={{ cursor: "pointer", color: "gray", fontWeight: 600 }}
        >
          To Do ⬇
        </Typography>
        <Menu>
          <MenuItem  >To Do</MenuItem>
          
        </Menu>
      </Box>
 
     
    </Box>
  );
};

export default Dropdown;
