import React, { useEffect, useState } from 'react'
import Project from './Project'

function Projects() {

   const [projects, setProjects] = useState([])

   useEffect(() => {
      fetch('http://localhost:3000/projects')
      .then(res => res.json())
      .then(data => setProjects(data))
   }, [])

   const projectList = projects.map(project => (
      <Project
         key={project.id}
         name={project.name}
         frontend={project.frontend}
         backend={project.backend}
         css={project.css}
         link={project.link}
         github={project.github}
         demo={project.demo}
         description={project.description}
      />
   ))

   return (
      <div>{projectList}</div>
   )
}

export default Projects