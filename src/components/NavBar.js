import React from 'react'
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'

function NavBar() {
	
	return (
		<Menu pointing secondary >
			<Menu.Item as={Link} to='/' name='about' className='menu'>
				ABOUT ME
			</Menu.Item>
			<Menu.Item as={Link} to='/projects' name='projects' className='menu'>
				PROJECTS
			</Menu.Item>
			<Menu.Item as={Link} to='/hobbies' name="hobbies" className='menu'>
				HOBBIES
			</Menu.Item>
		</Menu>
	);
}

export default NavBar