import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function AddColor() {
  const [BG, setBG] = useState("orange");
  const inputStyle = { backgroundColor: BG };
  const buttonStyle = { marginLeft: "20px", fontSize: "10px" };
  const [newBox, setNewBox] = useState(["teal", "orange", "lavender"]);
  return (
    <div className="addColor">
      <TextField
        onChange={(event) => {
          setBG(event.target.value);
        }}
        style={inputStyle}
        value={BG}
        id="standard-basic"
        label="ENTER A COLOR"
        variant="standard"
      />

      <Button
        onClick={() => setNewBox([...newBox, BG])}
        style={buttonStyle}
        variant="contained"
      >
        ADD COLOR
      </Button>
      <p>{BG}</p>
      {newBox.map((colorValue, index) => (
        <NewColorBox key={index} color={colorValue} />
      ))}
    </div>
  );
}

function NewColorBox({ color }) {
  const styles = {
    backgroundColor: color,
    height: "25px",
    width: "200px",
    margin: "10px",
  };
  return <div style={styles}></div>;
}

export { AddColor };
