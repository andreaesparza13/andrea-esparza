import React from 'react'
import { Grid, Embed, Image } from 'semantic-ui-react'
import lady from './files/lady.png'
import torch from './files/torch.jpeg'
import wwc from './files/wwc.png'

function Hobbies() {
   return (
      <Grid celled='internally'>
         <Grid.Row>
         <Grid.Column width={4}>
            <Image src={lady} className='pics' centered rounded/>
         </Grid.Column>
         <Grid.Column width={8}>
            <br/>
            <br/>
            <br/>
            <p className='p2'>
               I love to travel and hang out with my dog. We have been on countless adventures and I hope it continues for a long time. Some of the coolest places I've been to include Paris and Lyon where I got to watch the Women's World Cup final and semi-final. My favorite place in the world is my grandma's pecan ranch in Mexico because it feels like home.
            </p>
         </Grid.Column>
         <Grid.Column width={4}>
            <Image src={wwc} className='pics' centered rounded />
         </Grid.Column>
         </Grid.Row>
         <Grid.Row>
         <Grid.Column width={4}>
            <Image src={torch} className='pics' centered rounded />
         </Grid.Column>
         <Grid.Column width={8}>
            <br/>
            <br/>
            <br/>
            <p className='p2'>
               I started playing ultimate frisbee in college and dove head first into the community. One of my fondest memories is getting to play for a national championship with my best friends. Since then, I have been involved with growing the sport and increasing visibility for women and non-binary players through the Premier Ultimate League. 
            </p>
         </Grid.Column>
         <Grid.Column width={4}>
            <Embed id='EgCQHF0fuqc' source='youtube' placeholder='https://play-lh.googleusercontent.com/vA4tG0v4aasE7oIvRIvTkOYTwom07DfqHdUPr6k7jmrDwy_qA_SonqZkw6KX0OXKAdk'/>
         </Grid.Column>
         </Grid.Row>
      </Grid>
   )
}

export default Hobbies