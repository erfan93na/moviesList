import {Box} from "@material-ui/core"
import Filter from "../Filter/Filter"
const FilterBar  = ({filters}) => {
    return ( <Box display="flex" p={4} bgcolor="success.light">
        {filters.map((filter,i)=><Filter key={i} filterName={filter}/>)}
    </Box>  );
}
 
export default FilterBar ;