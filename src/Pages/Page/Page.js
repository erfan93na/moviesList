import { useEffect, useState } from "react";
import FilterBar from "../../Components/FiltersBar/FilterBar/FilterBar";
import SearchBar from "../../Components/SearchBar/SearchBar";
import Sort from "../../Components/Sort/Sort";
import MoviesContainer from "../../Containers/Movies/MoviesContainer/MoviesContainer";
const Page = ({ filters, data }) => {
  const [moviesState,setMovies]=useState(data)
  const [searchState, setSearchState] = useState("");
  const handleSearchFieldChange = (e) => {
    setSearchState(e.target.value);
  };
  
  useEffect(() => {
     setMovies(data.filter(
      (movie) =>
        movie.title.includes(searchState) ||
        movie.description.includes(searchState) ||
        movie.price===(+searchState)
    ))
  },[searchState,data]);

  return (
    <>
      <SearchBar handleSearchFieldChange={handleSearchFieldChange} />
      <FilterBar filters={filters} />
      <Sort />
      <MoviesContainer
        data={moviesState}
      />
    </>
  );
};

export default Page;
