import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import { useDispatch } from "react-redux"; 
import TodoList from '../Component/TodoList';
import { fetchTasks } from "../taskSlice";

function All_tasks() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks("task"));  
  }, [dispatch]);

  return (
    <Box sx={{ width: '100%', padding: 2 }}>
      <TodoList />
    </Box>
  );
}

export default All_tasks;
