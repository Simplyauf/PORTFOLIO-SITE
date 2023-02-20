import { useState } from "react";
import "./App.css";
import { AboutMe } from "./components/aboutMe";
import Header from "./components/header";
import HeroSection from "./components/heroSection";
import { Projects } from "./components/projects";
import { Skills } from "./components/skills";
import "./index.css";

function App() {
  return (
    <div className="App w-full ">
      <Header />
      <HeroSection />
      <AboutMe />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
