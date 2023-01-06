import React from 'react'
import { Button, Container, Image, Icon } from 'semantic-ui-react'
import me from './files/me.png'
import resume from './files/resume.pdf'

function AboutMe() {
   return (
      <Container>
         <h1 className='header'>Welcome!</h1>
         <Image src={me} size='medium' centered rounded />
         <br/>
         <p className='paragraph'>   
            Hi there! My name is Andrea Esparza, but most people call me Dre. I live in Houston, TX and recently graduated from Flatiron School as a software engineer. I learned how to program using JavaScript, React, Ruby, and Rails. Click the 'projects' tab to see what I've created and collaborated on. I am excited to continue learning about software engineering and applying it to my work.
         </p>
         <p className='para
         graph'>
            Before Flatiron, I spent five years as a geometry teacher and soccer coach at Navarro High School in Austin, TX. While it was incredibly difficult to leave teaching, I have fallen in love with coding in a way I never expected. 
         </p>
         <p className='paragraph'>
            <Button color='black' href={resume} download><Icon name="file alternate"/>Resume</Button>
            <Button color='black' href='https://www.linkedin.com/in/andreaesparza13/' target='_blank'><Icon name="linkedin"/>LinkedIn</Button>
            <Button color='black' href='https://github.com/andreaesparza13' target='_blank'><Icon name="github"/>Github</Button>
         </p>
         <br/>
      </Container>
   )
}

export default AboutMe