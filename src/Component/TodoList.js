import React, { useState } from "react"; 
import Checkbox from "@mui/material/Checkbox";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { List, ListItem, ListItemText, IconButton, Divider, Typography } from "@mui/material";
import InputTaskAdd from "./InputTaskAdd";

const TodoList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Buy groceries", completed: false, prioritized: false },
    { id: 2, text: "Finish project report", completed: false, prioritized: true },
    { id: 3, text: "Call the bank", completed: false, prioritized: false },
    { id: 4, text: "Schedule dentist appointment", completed: false, prioritized: false },
    { id: 5, text: "Plan weekend trip", completed: false, prioritized: false },
  ]);

  const [newTask, setNewTask] = useState("");   

  const handleToggleComplete = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  
  const handleTogglePriority = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, prioritized: !task.prioritized } : task
      )
    );
  };

  
  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks((prevTasks) => [
        ...prevTasks,
        { id: Date.now(), text: newTask, completed: false, prioritized: false },
      ]);
      setNewTask(""); 
    }
  };

  const incompleteTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ marginBottom: "20px" }}>
        <InputTaskAdd
          task={newTask}
          setTask={setNewTask}  
          handleAddTask={handleAddTask}
        />
      </div>

      <Typography variant="h6">To Do</Typography>
      <List>
        {incompleteTasks.map((task) => (
          <React.Fragment key={task.id}>
            <ListItem>
              <Checkbox
                checked={task.completed}
                onChange={() => handleToggleComplete(task.id)}
                inputProps={{ "aria-label": "complete task checkbox" }}
              />
              <ListItemText
                primary={task.text}
                style={{
                  color: task.completed ? "#888" : "#000",
                }}
              />
              <IconButton onClick={() => handleTogglePriority(task.id)} aria-label="prioritize task">
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
            <ListItem>
              <Checkbox
                checked={task.completed}
                onChange={() => handleToggleComplete(task.id)}
                inputProps={{ "aria-label": "complete task checkbox" }}
              />
              <ListItemText
                primary={task.text}
                style={{
                  textDecoration: "line-through",
                  color: "#888",
                }}
              />
              <IconButton onClick={() => handleTogglePriority(task.id)} aria-label="prioritize task">
                {task.prioritized ? <StarIcon color="warning" /> : <StarBorderIcon />}
              </IconButton>
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </div>
  );
};

export default TodoList;
