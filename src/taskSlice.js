import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  selectedTask: null,  
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
        prioritized: false,
      });
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
 

    selectTask: (state, action) => {
      state.selectedTask = action.payload; 
    },
    toggleComplete: (state, action) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
      if (state.selectedTask && state.selectedTask.id === action.payload) {
        state.selectedTask.completed = !state.selectedTask.completed;
      }
    },
    togglePriority: (state, action) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) {
        task.prioritized = !task.prioritized;
      }
      if (state.selectedTask && state.selectedTask.id === action.payload) {
        state.selectedTask.prioritized = !state.selectedTask.prioritized;
      }
    },
  },
});

export const { addTask, deleteTask, toggleComplete, togglePriority, selectTask } = taskSlice.actions;
export default taskSlice.reducer;
