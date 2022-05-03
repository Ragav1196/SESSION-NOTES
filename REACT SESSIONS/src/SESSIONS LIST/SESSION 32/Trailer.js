import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { useHistory } from "react-router-dom";

export function Trailer({ MoviesList }) {
  const history = useHistory();

  const { id } = useParams();
  const Movies = MoviesList[id];

  const styles = {
    color: Movies.rating < 7.5 ? "crimson" : "green",
    fontWeight: "700",
  };

  return (
    <div>
      <iframe
        width="100%"
        height="540px"
        src={Movies.trailer}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="movieDetails">
        <div className="MovieSpecs">
          <h3 className="movieName font">{Movies.name}</h3>
          <h3 className="movieRating font" style={styles}>
            <i className="material-icons">star</i> {Movies.rating}
          </h3>
        </div>
        <Typography variant="body2" color="text.secondary">
          {Movies.summary}
        </Typography>
      </div>

      {/* TO GO ONE STEP BACK IN THE BROWSER USING BUTTON */}
      <button onClick={() => history.goBack()}>GO BACK</button>
      {/* "goBack" method take u one step back */}
      {/* "goForward" method take u one step forward */}
    </div>
  );
}
