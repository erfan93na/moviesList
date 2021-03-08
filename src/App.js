import "./App.css";
import Header from "./Components/Header/Header"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import PageA from "./Pages/PageA/PageA";
import PageB from "./Pages/PageB/PageB"
function App() {
  return (
    <>        <Router>

      <Header />
        <Switch>

          <Route path="/pageA" ><PageA/></Route>
          <Route path="/pageB" ><PageB/></Route>
          </Switch>

        </Router>

    </>
  );
}

export default App;
