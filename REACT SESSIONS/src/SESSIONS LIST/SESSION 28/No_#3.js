import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


// TO CREATE A NEW DIV COLOR BOX EACH TIME THE BUTTON IS PRESSED
function AddColor() {
    const [BG, setBG] = useState("orange")
    const inputStyle = { backgroundColor: BG };
    const buttonStyle = {marginLeft: "20px", fontSize: "10px"}    
    const [newBox, setNewBox] = useState(["teal", "orange", "lavender"])
    return (
      <div>        
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
        {/* This button and textfield is from Material UI */}
        {/* "[...newBox, BG]" here we are copying the array in the "newBox" and adding the "BG" value to it */}
        {/* instead of "[...newBox, BG]" we cant use "newBox.push(BG)" which will change the array inside the "newBox" that we dont want */}
        {/* we only need to give a new value in the "setNewBox" which will be applied to the "newBox". "setNweBox" will change the "newBox", we should not directly change the "newBox" */}
        <p>{BG}</p>
        {newBox.map((colorValue, index) => (
          <NewColorBox key={index} color={colorValue} />
        ))}
        {/* whenever we do map we get a error saying "Warning: Each child in a list should have a unique "key" prop." */}
        {/* inorder to avoid that we need to pass in "Key" with unique value for each of the elements in an array */}
        {/* so that we pass in the index value which will be unique fo reach elements in the array */}
        {/* map method takes in index as it 2nd argument */}
      </div>
    );
  }

  function NewColorBox({color}) {
    const styles = {backgroundColor: color, height: "25px", width: "200px", margin: "10px"};
    return <div style={styles}></div>    
  }

  export{AddColor}