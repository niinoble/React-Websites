import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// Pages
import Home from "./Pages/Home/Home";
import Menu from "./Pages/Menu/Menu";
import Campsite from "./Pages/Menu/Campsite";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";

// App Components
import Header from "./Header";
import Footer from "./Footer";

const App = props => {
  const CampsiteWithId = r => <Campsite {...r} />;

  return (
    <div>
      <Header />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/menu/:campsiteId" render={CampsiteWithId} />
        <Route path="/menu" component={Menu} />

        <Route path="/aboutus" component={About} />

        <Route path="/contactus" component={Contact} />

        <Redirect to="/home" />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
