import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <ul>
        <li>HTML, CSS, JavaScript, React</li>
        <li>Node.js, Express.js</li>
        <li>PostgreSQL, MongoDB</li>
        <li>AWS, Heroku, GitHub Pages</li>
        {/* Add more skills similarly */}
      </ul>
    </section>
  );
};

export default Skills;