import { BrowserRouter, Route, Switch } from "react-router-dom";
import Index from "./pages/Index";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Article from "./pages/Article";
import Articles from "./pages/Articles";
import Category from "./pages/Category";
import ToTop from "./components/ToTop";
import About from "./pages/About";
import "./App.css";

import Page404 from "./pages/Page404";
import Profile from "./pages/Profile";

function App() {


  return (
    <>
      <BrowserRouter>
        <ToTop />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Index />
          </Route>
          <Route path="/article/:url" component={Article} />
            {/* <Article />
          </Route> */}
          <Route path="/category/:id" component={ Category} />
            {/* <Category />
          </Route> */}
          <Route path="/articles/" component={Articles} />
             {/* <Articles />
          </Route> */}
          <Route path="/about" component={About} />
            {/* <About />
          </Route> */}
          <Route path="/profile" component={Profile} />
            {/* <Profile />
          </Route> */}

          <Route>
            <Page404 />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
