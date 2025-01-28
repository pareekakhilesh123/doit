 
// import { createStore } from "redux";
 
// const initialState = {
//   tasks: [
//     { id: 1, text: "Buy groceries", completed: false, prioritized: false },
//     { id: 2, text: "Finish project report", completed: false, prioritized: true },
//     { id: 3, text: "Call the bank", completed: false, prioritized: false },
//     { id: 4, text: "Schedule dentist appointment", completed: false, prioritized: false },
//     { id: 5, text: "Plan weekend trip", completed: false, prioritized: false },
//   ],
// };

 
// const taskReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "ADD_TASK":
//       return {
//         ...state,
//         tasks: [
//           ...state.tasks,
//           { id: Date.now(), text: action.payload, completed: false, prioritized: false },
//         ],
//       };
//     case "TOGGLE_COMPLETE":
//       return {
//         ...state,
//         tasks: state.tasks.map((task) =>
//           task.id === action.payload ? { ...task, completed: !task.completed } : task
//         ),
//       };
//     case "TOGGLE_PRIORITY":
//       return {
//         ...state,
//         tasks: state.tasks.map((task) =>
//           task.id === action.payload ? { ...task, prioritized: !task.prioritized } : task
//         ),
//       };
//     default:
//       return state;
//   }
// };
 
// const store = createStore(taskReducer);

// export default store;
