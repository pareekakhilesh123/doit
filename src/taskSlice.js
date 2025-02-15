import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async (queryParam) => {
  const response = await fetch("http://localhost:5000/tasks?filter="+queryParam);
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

export const updateTaskAPI = createAsyncThunk(
  "tasks/updateTask",
  async ({ id, completed, prioritized }) => {
    const response = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed, prioritized }),
    });

    return response.json();
  }
);

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
     
      .addCase(addTaskAPI.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
      })
     
      .addCase(updateTaskAPI.fulfilled, (state, action) => {
        const updatedTask = action.payload;
        const index = state.tasks.findIndex((task) => task.id === updatedTask.id);
        if (index !== -1) {
          state.tasks[index] = updatedTask;
        }
      });
      
  },
});

export const { selectTask, toggleComplete, togglePriority } = taskSlice.actions;
export default taskSlice.reducer;
