import React from "react";
import Navbar from "../Navbar/Navbar";
import Projects from "../Projects/Projects";
import About from "../About/About";
import Dashboard from "../Dashboard/Dashboard";
import Footer from "../Footer/Footer";
import Contact from "../Contact/Contact";
import "./MainPage.css";

const MainPage = () => {
  return (
    <div className="app">
      <Navbar />
      <div id="dashboard">
        <Dashboard />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
