import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const response = await fetch("http://localhost:5000/tasks");
  return response.json();
});

export const addTaskAPI = createAsyncThunk("tasks/addTask", async (taskText) => {
  const newTask = { text: taskText, completed: false, prioritized: false };

  const response = await fetch("http://localhost:5000/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTask),
  });

  return response.json(); 
});


const initialState = {
  tasks: [],
  selectedTask: null,
  status: "idle",
  error: null,
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    selectTask: (state, action) => {
      state.selectedTask = action.payload;
    },
    toggleComplete: (state, action) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) task.completed = !task.completed;
    },
    togglePriority: (state, action) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) task.prioritized = !task.prioritized;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addTaskAPI.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
      });
  },
});

export const { selectTask, toggleComplete, togglePriority } = taskSlice.actions;
export default taskSlice.reducer;
