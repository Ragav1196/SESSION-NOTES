import "./App.css";
import { CreatingNavBar } from "./SESSIONS LIST/SESSION 35/CreatingNavBar";
import { useReducer } from "react";

export default function App() {
  return (
    <div>
      <CreatingNavBar />
      <ReduxExample />
    </div>
  );
}

// ADDING FORM VALIDATION TO THE "AddMovies.js"

// ADDING FORM VALIDATION DESIGN FROM MATERIAL UI

// BASICS OF REACT RECAPED

// REDUX
/* 	view => amitabh -> dispatch (giving order to PA to order iphone)
	action => amitabh PA (PA ordering the iphone in amazon)
	reducer => Amazon (amazon checks the store and deliver the iphone)		
	store => amazon warehouse -> subscribe -> view => amitabh (iphone will be delivered to amitabh (who has subscribed))
		only amazon can update its warehouse */

// redux is implemented inside the react natively as "useReducer" hook because of its use cases when handling bigger apps

const initialState = { count: 0 };
/* giving initial value to the store */

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    /* returning new state */
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: action.payload };
    default:
      return state;
    /* default case has to be given */
  }
};

function ReduxExample() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  console.log(dispatch);
  /* 	useReducer takes in two arguements first is a reducer function and second one is the initial state of the store */
  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      {/* 	dispatch(action) */}
      {/* 	specifying a type that word can be anything. */}
      {/* 	the dispatch will calls the reducer funciton */}
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset", payload: 0 })}>
        Reset
      </button>
    </div>
  );
}
// TO DO
/* not understood properly */
