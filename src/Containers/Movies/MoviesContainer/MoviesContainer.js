import {Grid} from '@material-ui/core'
import Movie from "../Movie/Movie"
const MoviesContainer = ({data:moviesList}) => {
  return <Grid container>{moviesList.map(movie=><Grid item xs={3}><Movie {...movie}/></Grid>)}</Grid> ;
};

export default MoviesContainer;
