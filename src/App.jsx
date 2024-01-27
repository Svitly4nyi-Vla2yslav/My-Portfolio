// import React from "react";
import { GlobalStyles } from "./styles/globalStyles.js";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Skills } from "./components/Skills/Skills";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { Background } from "./components/Background/Background";
import { Experience } from "./components/Experience/Experience.jsx";

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Background />
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
};
