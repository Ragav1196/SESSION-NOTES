import "./App.css";
import { CreatingNavBar } from "./SESSIONS LIST/SESSION 35/CreatingNavBar";
// import { useReducer } from "react";


export default function App() {
  return (
    <div>
      <CreatingNavBar />
      {/* <ReduxExample /> */}
    </div>
  );
}

// const initialState = { count: 0 };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + 1 };
//     /* returning new state */
//     case "decrement":
//       return { count: state.count - 1 };
//     case "reset":
//       return { count: action.payload };
//     default:
//       return state;
//   }
// };

// function ReduxExample() {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   console.log(state);
//   console.log(dispatch);
//   return (
//     <div>
//       <h2>Count: {state.count}</h2>
//       <button onClick={() => dispatch({ type: "increment" })}>+</button>
//       <button onClick={() => dispatch({ type: "decrement" })}>-</button>
//       <button onClick={() => dispatch({ type: "reset", payload: 0 })}>
//         Reset
//       </button>
//     </div>
//   );
// }
