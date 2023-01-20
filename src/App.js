import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import React from "react";
import About from "./Component/About";
import Contact from "./Component/Contact";
import { BrowserRouter as Router, 
  Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <Routes>
        <Route path="/" element={<Navbar/>} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
      </Router>

    // <Router>
    //   <Switch>
    //     <Navbar />
    //     <Route exact path="/Home">
    //       <Home/>
    //     </Route>
    //     <Route   exact path="/Context">
    //       <Context/>
    //     </Route>
    //     <Route exact path="/Context2">
    //       <Context2/>
    //     </Route>
    //   </Switch>
    // </Router>
  );
}

export default App;
