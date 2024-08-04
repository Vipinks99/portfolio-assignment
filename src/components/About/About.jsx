// src/components/About.js
import React from 'react';
import './About.css';
import profile from'../../images/profile-1.jpeg'

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-photo">
        <img src={profile} alt="About Us" height={300} width={300}/>
      </div>
      <div className="about-info">
        <h2>About Me</h2>
        <p>
        I am a <strong>Frontend Software Developer</strong> with hands-on experience, I specialize in building dynamic and responsive web applications using <strong>React.js and TypeScript</strong>. My expertise lies in creating seamless user interfaces and enhancing user experiences through efficient and maintainable code. I thrive in collaborative environments, working closely with cross-functional teams to deliver high-quality software solutions. My passion for continuous learning and staying updated with the latest industry trends drives my commitment to excellence in every project. I am eager to contribute to innovative projects and further my career in frontend development. Also, I have basic understanding of Python, Java (Basics), C++ and Databases like MySQL and MongoDB.


        </p>
      </div>
    </section>
  );
};

export default About;