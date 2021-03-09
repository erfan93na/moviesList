import Page from "../Page/Page";
import data from "../../data"
const PageA = () => {
  return <Page filters={["Price", "Rate"]} data={data} />
};

export default PageA;
