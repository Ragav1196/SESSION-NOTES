import { useState } from "react";
import {ButtonForMovies} from "./ButtonForMovies"

export function Movies({ name, poster, rating, summary }) {
    const styles = { color: rating < 7.5 ? "crimson" : "green", fontWeight: "700" };
  
    const [summaryHide, setSummaryHide] = useState(true);
    const summaryStyles = { display: summaryHide ? "none" : "block" }
  
    return (
      <div className="movieContainer">
        <img className="posterPic" src={poster} alt={name} />
        <div className="movieDetails">
          <div className="MovieSpecs">
            <h3 className="movieName font">{name}</h3>
            <h3 className="movieRating font" style={styles}><i class="material-icons">star</i> {rating}</h3>
          </div>
          <button onClick={() => {
            setSummaryHide(!summaryHide)
          }}>{summaryHide ? "Show" : "Hide"} Description</button>
          <p className="movieSummary font" style={summaryStyles}>{summary}</p>
        </div>
        <ButtonForMovies />
      </div>
    );
  }