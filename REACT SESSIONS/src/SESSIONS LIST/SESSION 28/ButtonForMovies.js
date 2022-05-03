import { useState } from "react";

export function ButtonForMovies() {
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);
    return (
      <div className="ButtonForMovies">
        <button
          onClick={() => {
            setLike(like + 1);
          }}
          color="primary"          
        >
          <i class="material-icons">thumb_up</i> Like {like}
        </button>
        <button
          onClick={() => {
            setDislike(dislike + 1);
          }}
        >
          {" "}
          <i class="material-icons">thumb_down</i> Dislike {dislike}
        </button>
      </div>
    );
  }
  
  