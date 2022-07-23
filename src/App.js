import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Home/Home";
import Create from "./Create/Create";
import BlogDetails from "./BlogDetails/BlogDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>

          <Switch>
            <Route exact path="/create">
              <Create />
            </Route>
          </Switch>

          <Switch>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
