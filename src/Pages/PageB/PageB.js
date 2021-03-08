import Page from "../Page/Page";
import data from "../../data"

const PageB = () => {
  return <Page filters={["price"]} data={data} />;
};

export default PageB;
