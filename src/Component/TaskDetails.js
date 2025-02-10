import React from "react"; 
import { useSelector, useDispatch } from "react-redux";
import { selectTask, deleteTask, toggleComplete, togglePriority } from "../taskSlice"; 
import {
  Box,
  Typography,
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  TextField,
} from "@mui/material";
import {
  Add,
  Notifications,
  CalendarToday,
  Repeat,
  Star,
  StarBorder,
  Delete,
  Close,
} from "@mui/icons-material";

const TodoDetails = ({ taskId }) => {
  const task = useSelector((state) => state.tasks.tasks.find((t) => t.id === taskId));
  const dispatch = useDispatch();

  if (!task) return null;

  return (
    <Box
      sx={{
        maxWidth: 400,
        bgcolor: "#F4F8EE",
        p: 2,
        borderRadius: 2,
        boxShadow: 3,
      }}
    >      
      <ListItem>
        <ListItemIcon>
          <Checkbox
            checked={task.completed}
            onChange={() => dispatch(toggleComplete(task.id))}  
          />
        </ListItemIcon>
        <ListItemText primary={task.text} />
        <IconButton onClick={() => dispatch(togglePriority(task.id))}>
          {task.prioritized ? <Star color="warning" /> : <StarBorder />}  
        </IconButton>
      </ListItem>
      <Divider />

      <List>
        <ListItem button>
          <ListItemIcon>
            <Add />
          </ListItemIcon>
          <ListItemText primary="Add Step" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <Notifications />
          </ListItemIcon>
          <ListItemText primary="Set Reminder" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <CalendarToday />
          </ListItemIcon>
          <ListItemText primary="Add Due Date" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <Repeat />
          </ListItemIcon>
          <ListItemText primary="Repeat" />
        </ListItem>
      </List>

      <Divider />

      <Box sx={{ p: 2 }}>
        <Typography variant="body2" color="textSecondary">
          Add Notes
        </Typography>
        <TextField
          fullWidth
          variant="standard"
          placeholder="Type here..."
          sx={{ mt: 1 }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 2,
          p: 1,
          bgcolor: "#EAEFE1",
          borderRadius: "4px",
        }}
      >
        <IconButton onClick={() => dispatch(selectTask(null))}>
          <Close />
        </IconButton>

        <Typography variant="body2">Created Today</Typography>

        <IconButton onClick={() => dispatch(deleteTask(task.id))}>
          <Delete />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TodoDetails;
