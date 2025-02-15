import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTaskAPI } from "../taskSlice";
import { Box, Button, IconButton, TextField } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LoopIcon from "@mui/icons-material/Loop";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const InputTaskAdd = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleClick = () => {
    if (task.trim()) {
      dispatch(addTaskAPI(task)); 
      setTask("");
    } else {
      alert("Task cannot be empty");
    }
  };

  return (
    <Box
      sx={{
        p: 2,
        borderRadius: 2,
        boxShadow: 1,
        bgcolor: "#f0f8f5",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        
      }}
    >
      <TextField
        label="Add Task"
        placeholder="Enter your task"
        variant="outlined"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        fullWidth
        autoComplete="off"
        onKeyDown={(e) => {
          if (e.key === "Enter") handleClick();
        }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex", gap: 1 }}>
          <IconButton>
            <NotificationsIcon />
          </IconButton>
          <IconButton>
            <LoopIcon />
          </IconButton>
          <IconButton>
            <CalendarTodayIcon />
          </IconButton>
        </Box>
        <Button
          variant="contained"
          sx={{
            bgcolor: "green",
            color: "white",
            fontWeight: "bold",
            textTransform: "none",
          }}
          onClick={handleClick}
        >
          Add Task
        </Button>
      </Box>
    </Box>
  );
};

export default InputTaskAdd;
