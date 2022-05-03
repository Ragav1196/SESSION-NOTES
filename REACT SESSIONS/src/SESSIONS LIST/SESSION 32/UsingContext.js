import { createContext, useContext } from "react";

const themeContext = createContext(null);

export function ContextList({ ContextMode, SetContextMode }) {
  return (
    <themeContext.Provider value={{ ContextMode, SetContextMode }}>
      <div>
        <ContextListItem value="light" />
        <ContextListItem value="dark" />
      </div>
    </themeContext.Provider>
  );
}
function ContextListItem({ value }) {
  return (
    <div>
      <ContextButton value={value} />
    </div>
  );
}
function ContextButton({ value }) {
  const { ContextMode, SetContextMode } = useContext(themeContext);

  const styles = {
    background: ContextMode === "light" ? "white" : "black",
    color: !(ContextMode === "light") ? "white" : "black",
  };
  return (
    <button className="ContextButtons" onClick={() => SetContextMode(value)} style={styles}>
      {value}
    </button>
  );
}
