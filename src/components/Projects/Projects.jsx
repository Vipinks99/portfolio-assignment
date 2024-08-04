import React from "react";
import "./Projects.css";
import boxOfficeImg from "../../images/box_office_app.png";
import ticTacToeImg from "../../images/ticTacToe.png";
import frootRootImg from "../../images/froot_root.png";
import eCommerceImg from "../../images/e-commerce.png";

const Projects = () => {
    // projects list adaptor 
  const projectsList = [
    {
      title: "Box-Office App",
      description:
        "Website made using React JS and API for Latest TV Shows and Web Series on Box Office",
      img: boxOfficeImg,
      target: "https://vipinks99.github.io/Box-Office-App/",
    },
    {
      title: "Tic-Tac-Toe Game",
      description: "2-player Fun Game made using React JS. Just Have a look",
      img: ticTacToeImg,
      target: "https://vipin-tictacgame.surge.sh/",
    },
    {
      title: "Froot-Root",
      description:
        "E-commerce Website made using HTML , CSS and JS for Organic Fruits",
      img: frootRootImg,
      target: "https://fireheart007.github.io/fruitroot/",
    },
    {
      title: "Nutritap B2B",
      description:
        "E-Commerce Website for Pantry,Stationery and Housekeeping items for Corporate",
      img: eCommerceImg,
      target: "https://b2b.nutritap.in/",
    },
  ];
  
  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="project-cards">
        {projectsList.map((project, index) => {
          return (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <a href={project.target} target="_blank" rel="noreferrer">
                <img src={project.img} alt="" height={100} width={100} />
              </a>
              <p>{project.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
