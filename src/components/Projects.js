import React, { useEffect, useState } from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import ProjectCard from './ProjectCard'

function Projects() {

   const [projects, setProjects] = useState([])

   useEffect(() => {
      fetch('https://andrea-esparza-backend.herokuapp.com/projects')
      .then(res => res.json())
      .then(data => setProjects(data))
   }, [])

   const projectList = projects.map(project => (
      <ProjectCard
         key={project.id}
         name={project.name}
         frontend={project.frontend}
         backend={project.backend}
         css={project.css}
         link={project.link}
         github={project.github}
         demo={project.demo}
         description={project.description}
         line={project.line}
      />
   ))

   return (
      <Grid columns={3} divided centered padded>
         <Grid.Row className='row'>
            <Grid.Column width={4} textAlign='center'>
               <Segment className='segment'>{projectList[0]}</Segment>
            </Grid.Column>
            <Grid.Column width={4} textAlign='center'>
               <Segment>{projectList[1]}</Segment>
            </Grid.Column>
            <Grid.Column width={4} textAlign='center'>
               <Segment>{projectList[2]}</Segment>
            </Grid.Column>
         </Grid.Row>
      </Grid>
   )
}

export default Projects