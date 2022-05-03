import { useState } from "react";

// TO CHANGE THE BG COLOR ACCORDING TO INPUT
function ColorBox() {
    const [BG, setBG] = useState("crimson")
    const inputStyle = { backgroundColor: BG };
    return (
      <div>
        <input
          onChange={(event) => {
            // console.log(event);
            // console.log(event.target.value);
              // we have the text typed in the input box inside the event => target => value            
            setBG(event.target.value)
          }}      
          style={inputStyle}
          value={BG}
            // DOUBT:1
        /> 
        <p>
          {BG}
        </p>            
      </div>
    );
  }

  export{ColorBox}