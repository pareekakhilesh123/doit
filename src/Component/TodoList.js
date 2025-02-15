import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTasks, updateTaskAPI } from "../taskSlice";
import {
  List,
  ListItem,
  Checkbox,
  IconButton,
  ListItemText,
  Divider,
  Typography,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import InputTaskAdd from "./InputTaskAdd";
import TodoDetails from "../Component/TaskDetails";

const TodoList = () => {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.tasks);
  const [selectedTaskId, setSelectedTaskId] = useState(null);

  const incompleteTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  const handleToggleComplete = (task) => {
    dispatch(updateTaskAPI({ id: task.id, completed: !task.completed, prioritized: task.prioritized }));
  };

  const handleTogglePriority = (task) => {
    dispatch(updateTaskAPI({ id: task.id, completed: task.completed, prioritized: !task.prioritized }));
  };

  return (
    <div style={{ display: "flex", width: "100%", height: "100vh" }}>
 
      <div style={{ width: selectedTaskId ? "60%" : "100%", padding: "20px", transition: "0.3s" }}>
        <InputTaskAdd />
        <Typography variant="h6">To Do</Typography>
        <List>
          {incompleteTasks.map((task) => (
            <React.Fragment key={task.id}>
              <ListItem
                button
                onClick={() => setSelectedTaskId(task.id)}
                style={{ width: "100%" }}  
              >
                <Checkbox
                  checked={task.completed}
                  onChange={() => handleToggleComplete(task)}
                />
                <ListItemText primary={task.text} />
                <IconButton onClick={() => handleTogglePriority(task)}>
                  {task.prioritized ? <StarIcon color="warning" /> : <StarBorderIcon />}
                </IconButton>
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>

        <Typography variant="h6" style={{ marginTop: "20px" }}>
          Completed
        </Typography>
        <List>
          {completedTasks.map((task) => (
            <React.Fragment key={task.id}>
              <ListItem
                button
                onClick={() => setSelectedTaskId(task.id)}
                style={{ width: "100%" }}  
              >
                <Checkbox
                  checked={task.completed}
                  onChange={() => handleToggleComplete(task)}
                />
                <ListItemText primary={task.text} style={{ textDecoration: "line-through", color: "#888" }} />
                <IconButton onClick={() => handleTogglePriority(task)}>
                  {task.prioritized ? <StarIcon color="warning" /> : <StarBorderIcon />}
                </IconButton>
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </div>

    
      {selectedTaskId && (
        <div
          style={{
            width: "40%",
            padding: "20px",
           
            transition: "0.1s",
          }}
        >
          <TodoDetails taskId={selectedTaskId} onClose={() => setSelectedTaskId(null)} />
        </div>
      )}
    </div>
  );
};

export default TodoList;
