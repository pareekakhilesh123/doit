import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleComplete, togglePriority } from "../taskSlice";
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
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  const [selectedTaskId, setSelectedTaskId] = useState(null); 

  const incompleteTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div style={{ display: "flex", padding: "20px" }}>
     
      <div style={{ flex: 1 }}>
        <InputTaskAdd />
        <Typography variant="h6">To Do</Typography>
        <List>
          {incompleteTasks.map((task) => (
            <React.Fragment key={task.id}>
              <ListItem button onClick={() => setSelectedTaskId(task.id)}>
                <Checkbox
                  checked={task.completed}
                  onChange={() => dispatch(toggleComplete(task.id))}
                />
                <ListItemText primary={task.text} />
                <IconButton onClick={() => dispatch(togglePriority(task.id))}>
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
              <ListItem button onClick={() => setSelectedTaskId(task.id)}>
                <Checkbox
                  checked={task.completed}
                  onChange={() => dispatch(toggleComplete(task.id))}
                />
                <ListItemText primary={task.text} style={{ textDecoration: "line-through", color: "#888" }} />
                <IconButton onClick={() => dispatch(togglePriority(task.id))}>
                  {task.prioritized ? <StarIcon color="warning" /> : <StarBorderIcon />}
                </IconButton>
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </div>

   
      <div style={{ flex: 1, paddingLeft: "20px" }}>
        {selectedTaskId && <TodoDetails taskId={selectedTaskId} />}
      </div>
    </div>
  );
};

export default TodoList;
