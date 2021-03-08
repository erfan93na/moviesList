import {Box} from "@material-ui/core"
import Filter from "../Filter/Filter"
const FilterBar  = ({filters}) => {
    return ( <Box display="flex">
        {filters.map(filter=><Filter filterName={filter}/>)}
    </Box>  );
}
 
export default FilterBar ;