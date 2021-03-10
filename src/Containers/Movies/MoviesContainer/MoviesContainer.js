import { Grid, Box } from "@material-ui/core";
import Movie from "../Movie/Movie";
const MoviesContainer = ({ data: moviesList }) => {
  return (
    <Box p={3}>
      <Grid container spacing={3}>
        {moviesList.map((movie) => (
          <Movie key={movie.id} {...movie} />
        ))}
      </Grid>{" "}
    </Box>
  );
};

export default MoviesContainer;
