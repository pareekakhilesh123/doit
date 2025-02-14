import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import { useDispatch } from "react-redux"; 
import TodoList from '../Component/TodoList';
import { fetchTasks } from "../taskSlice";

function Today() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks("today"));  
  }, [dispatch]);

  return (
    <Box sx={{ width: '100%', padding: 2 }}>
      <TodoList />
    </Box>
  );
}

export default Today;
