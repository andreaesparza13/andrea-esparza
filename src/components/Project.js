import React from 'react'

function Project({ name, frontend, backend, css, link, github, demo, description }) {
   return (
      <div>
         <div>{name}</div>
         <div>{frontend}</div>
         <div>{backend}</div>
         <div>{css}</div>
         <div>{link}</div>
         <div>{github}</div>
         <div>{demo}</div>
         <div>{description}</div>
      </div>
   )
}

export default Project