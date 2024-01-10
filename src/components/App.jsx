import React from "react";
import Header from "./Header";
import Profile from "./Profile";
import About from "./About"
import Skills from "./Skills";
import Projects from "./Projects"
import Socials from "./Socials";
function App() {
 
  return (
    <div className="container">
      <Header />
      <Profile />
      <About />
      <Skills />
      <Projects />
      <Socials />
    </div>
  );
}

export default App;
