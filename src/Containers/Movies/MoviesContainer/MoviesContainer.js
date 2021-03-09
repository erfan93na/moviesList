import {Grid,Box} from '@material-ui/core'
import Movie from "../Movie/Movie"
const MoviesContainer = ({data:moviesList}) => {
  return <Box p={3}><Grid container spacing={3}>{moviesList.map(movie=><Grid item xs={4}><Movie {...movie}/></Grid>)}</Grid> </Box>;
};

export default MoviesContainer;
