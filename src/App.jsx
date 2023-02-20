import { useState } from "react";
import "./App.css";
import { AboutMe } from "./components/aboutMe";
import { ContactMe } from "./components/contactMe";
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
      <ContactMe />
      <footer className="bg-[hsl(0,0%,96%)] w-full py-20 px-[6%]">
        <p className="text-lg">&copy; Abdulazeez umarfaruq, {new Date().getFullYear()}. All rights reserved</p>
      </footer>
    </div>
  );
}

export default App;
