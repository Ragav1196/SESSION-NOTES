import { createContext, useContext, useState } from "react";

const initialState = 10;

// CONTEXT CREATING
const context = createContext({ state: 40 });
/* if Provider statement is missing then this "state" value will be passed to the useContext(context) */

export function Context() {
  const [state, setState] = useState(initialState);
  const obj = { state: state, setState: setState };
  // console.log(obj)
  /*  usually we pass null
    if we pass value instead of null
    when provider is missing "CreateContext" value will become the default value for the use context
    we need to pass in as object*/
  return (
    <context.Provider value={obj}>
      {/*   he is the publisher
            this is the value we are passing to the subscriber it can be anything object or string or array */}
      <div>
        <MyChild />
      </div>
    </context.Provider>
  );
}

const MyChild = () => {
  return (
    <div>
      <MyGrandChild />
    </div>
  );
};

const MyGrandChild = () => {
  /* he is the subscriber */
  const { state, setState } = useContext(context);
  /* context value will be the "obj" value and as that value is an object it is destructured here */

  const increment = () => {
    setState(state + 1);
  };

  return (
    <div>
      <button onClick={increment}>Increment</button>
      {state}
    </div>
  );
};
