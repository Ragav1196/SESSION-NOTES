import { useState } from "react";
import IconButton from '@mui/material/IconButton';

export function ButtonForMovies() {
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);
    return (
      <div className="ButtonForMovies">
        <IconButton
          onClick={() => {
            setLike(like + 1);
          }}
          color="primary"
          aria-label="like"
            // this is like "alt" in images tag
            // this is not only to display what is that element when it is not loaded, it is also useful for visually immpared people where it will read out loud the what is the element
        >
          <i className="material-icons">thumb_up</i> Like {like}
        </IconButton>

        <IconButton
          onClick={() => {
            setDislike(dislike + 1);
          }} 
          color="primary"  
          aria-label="dislike"   
        >
          <i className="material-icons">thumb_down</i> Dislike {dislike}
        </IconButton>                        
      </div>
    );
  }
  
  