import { useState } from "react";
import { ButtonForMovies } from "./ButtonForMovies";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

export function Movies({ name, poster, rating, summary }) {
  const styles = {
    color: rating < 7.5 ? "crimson" : "green",
    fontWeight: "700",
  };

  const [summaryHide, setSummaryHide] = useState(true);
  const summaryStyles = { display: summaryHide ? "none" : "block" };

  return (
    <Card className="movieContainer">
      <img className="posterPic" src={poster} alt={name} />
      <div className="movieDetails">
        <div className="MovieSpecs">
          <h3 className="movieName font">{name}</h3>
          <h3 className="movieRating font" style={styles}>
            <i className="material-icons">star</i> {rating}
          </h3>
        </div>

        <Button
          onClick={() => {
            setSummaryHide(!summaryHide);
          }}
          aria-label="show"
          color="primary"
          variant="contained"
          startIcon={summaryHide ? <ExpandMoreIcon /> : <ExpandLessIcon />}
        >
          {summaryHide ? "Show" : "Hide"} Description
        </Button>
        <Typography
          style={summaryStyles}
          className="movieSummary font"
          variant="body2"
          color="text.secondary"
        >
          {summary}
        </Typography>
      </div>
      <ButtonForMovies />
    </Card>
  );
}
