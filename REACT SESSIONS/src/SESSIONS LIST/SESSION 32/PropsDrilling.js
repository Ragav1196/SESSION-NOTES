export function PropsList({ PropsMode, SetPropsMode }) {
  return (
    <div>
      <PropsListItem
        value="light"
        PropsMode={PropsMode}
        SetPropsMode={SetPropsMode}
      />
      <PropsListItem
        value="dark"
        PropsMode={PropsMode}
        SetPropsMode={SetPropsMode}
      />
    </div>
  );
}
function PropsListItem({ value, PropsMode, SetPropsMode }) {
  return (
    <div>
      <PropsButton
        value={value}
        PropsMode={PropsMode}
        SetPropsMode={SetPropsMode}
      />
    </div>
  );
}
function PropsButton({ value, PropsMode, SetPropsMode }) {
  const styles = {
    background: PropsMode === "light" ? "white" : "black",
    color: !(PropsMode === "light") ? "white" : "black",
  };
  return (
    <button className="ContextButtons" onClick={() => SetPropsMode(value)} style={styles}>
      {value}
    </button>
  );
}

// PROPS DRILLING
/* 
    this above example is the sample for props drilling. here "List and ListItem" component are not using those props but they have to carry those props
        to deliver it to the "Button" component
    this process is optimized by using context
 */
