import { useState } from "react";
import { PropsList } from "./PropsDrilling";
import { ContextList } from "./UsingContext";

export function Buttons() {
  // PROPS DRILLING
  const [PropsMode, SetPropsMode] = useState("light");
  const PropsStyles = {
    background: !(PropsMode === "light") ? "white" : "black",
  };
  const PropsTextStyle = { color: PropsMode === "light" ? "white" : "black" };

  // USING CONTEXT
  const [ContextMode, SetContextMode] = useState("light");
  const ContextStyles = {
    background: !(ContextMode === "light") ? "white" : "black",
  };
  const ContextextStyle = {
    color: ContextMode === "light" ? "white" : "black",
  };

  return (
    <div>
      {/* PROPS DRILLING */}
      <div style={PropsStyles}>
        <h1 style={PropsTextStyle}>PROPS DRILLING</h1>
        <PropsList PropsMode={PropsMode} SetPropsMode={SetPropsMode} />
      </div>

      {/* USING CONTEXT */}
      <div style={ContextStyles}>
        <h1 style={ContextextStyle}>USING CONTEXT</h1>
        <ContextList
          ContextMode={ContextMode}
          SetContextMode={SetContextMode}
        />
      </div>
    </div>
  );
}
