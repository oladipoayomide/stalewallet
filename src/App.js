import { BrowserRouter, Route, Switch } from "react-router-dom";
import Page from "./components/Page";
import About from "./components/About"
import Faqs from "./components/Faqs"
import Header from "./components/Header";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>

        <Switch>
          <Route exact path="/">
            <Page />
          </Route>
          <Route path="/about">
            <Header />
            <About />
          </Route>
          <Route path="/faqs">
            <Header />
            <Faqs />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
