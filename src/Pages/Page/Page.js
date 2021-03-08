import FilterBar from "../../Components/FiltersBar/FilterBar/FilterBar";
import SearchBar from "../../Components/SearchBar/SearchBar";
import Sort from "../../Components/Sort/Sort";
import MoviesContainer from "../../Containers/Movies/MoviesContainer/MoviesContainer";
const Page = ({ filters, data }) => {
  return (
    <>
      <SearchBar />
      <FilterBar filters={filters} />
      <Sort />
      <MoviesContainer data={data} />
    </>
  );
};

export default Page;
