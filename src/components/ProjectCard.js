import React, { useState } from 'react'
import { Button, Modal, Embed, Icon } from 'semantic-ui-react'

function Project({ name, frontend, backend, css, link, github, demo, description, line }) {
   const [open, setOpen] = useState(false)

   return (
      <div>
         <h3>{name}</h3>
         <p>{frontend}, {backend}</p>
         <p>{line}</p>
         <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button>Project Details</Button>}
         >
            <Modal.Header>{name}</Modal.Header>
            <Modal.Content>
               <Embed id={demo} source='youtube' />
               <Modal.Description>
                  <p>Frontend: {frontend}</p>
                  <p>Backend: {backend}</p>
                  <p>CSS: {css}</p>
                  <p>{description}</p>
               </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
               <Button color='black' href={link} target="_blank"><Icon name="chain" />Link</Button>
               <Button color='black' href={github} target="_blank"><Icon name='github' />Github</Button>
            </Modal.Actions>
         </Modal>
      </div>
   )
}

export default Project