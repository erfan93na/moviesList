import { useEffect, useState,useMemo } from "react";
import FilterBar from "../../Components/FiltersBar/FilterBar/FilterBar";
import SearchBar from "../../Components/SearchBar/SearchBar";
import Sort from "../../Components/Sort/Sort";
import MoviesContainer from "../../Containers/Movies/MoviesContainer/MoviesContainer";
import { FiltersContext } from "../../FiltersContext";
const Page = ({ filters, data }) => {
  const [moviesState, setMovies] = useState(data);
  const [searchState, setSearchState] = useState("");
  const [filtersState, setFiltersState] = useState({});
  const [sortState, setSortState] = useState("");
  console.log(sortState);

  const handleSearchFieldChange = (e) => {
    setSearchState(e.target.value.toLowerCase());
  };

  useEffect(() => {

    setMovies((prevState) => {
      return data.filter(
        (movie) =>
          movie.title.toLowerCase().includes(searchState) ||
          movie.description.toLowerCase().includes(searchState) ||
          movie.price === +searchState
      );
    });
  }, [searchState, data]);

  useEffect(() => {

    if (filtersState.filterName && filtersState.value) {
      const filterName = filtersState.filterName;
      const value = filtersState.value;
      setMovies((prevState) => {
        prevState.sort((a, b) => a[filterName] - b[filterName]);
        return value === "highest"
          ? [prevState[prevState.length - 1]]
          : [prevState[0]];
      });
    }
  }, [filtersState]);

  // useEffect(() => {
  //   console.log("useEff");

  //    if (sortState) {
  //   setMovies((prevState) => {
  //     if (sortState === "DESC") {
  //       return prevState.sort((a, b) => a.rate - b.rate);
  //     }
  //     return prevState.sort((a, b) => b.rate - a.rate);
  //   });
  //    }
  // }, [sortState]);
  const memoFilterBar = useMemo(() => <FilterBar filters={filters} />,[filters]);
  return (
    <>
      <SearchBar handleSearchFieldChange={handleSearchFieldChange} />
      <FiltersContext.Provider value={[filtersState, setFiltersState]}>
{memoFilterBar}
      </FiltersContext.Provider>
      <Sort setSortState={setSortState} sortState={sortState} />
      <MoviesContainer data={sortState?(sortState==="DESC"?moviesState.sort((a, b) => a.rate - b.rate):moviesState.sort((a, b) => b.rate - a.rate)):moviesState} />
    </>
  );
};

export default Page;
