import React, { useState } from 'react';
import Appbar from '../Component/Appbar';
import Sidebar from '../Component/Sidebar';
import { Box } from '@mui/material';
import Dropdown from '../Component/Dropdown';

import TodoList from '../Component/TodoList';

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); 

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <Appbar onToggleSidebar={handleToggleSidebar} />
      <Box sx={{ display: 'flex' }}>
       {isSidebarOpen && <Sidebar />}
        <Box sx={{ width: '100%', padding: 2 }}>
          <Dropdown />
          {/* <InputTaskAdd /> */}
          <TodoList />
        </Box>
      </Box>
    </div>
  );
}

export default Dashboard;
