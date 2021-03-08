import Page from "../Page/Page";
import data from "../../data"
const PageA = () => {
  return <Page filters={["price", "rate"]} data={data} />
};

export default PageA;
