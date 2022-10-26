import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'

function NavBar() {
	const [activeItem, setActiveItem] = useState('about')
	
	return (
		<Menu pointing secondary>
			<NavLink to='/'>
				<Menu.Item name='about' active={activeItem === 'about'} onClick={() => setActiveItem('about')}>
					ABOUT ME
				</Menu.Item>
			</NavLink>
			<NavLink to='/projects'>
				<Menu.Item name='projects' active={activeItem === 'projects'} onClick={() => setActiveItem('projects')}>
					PROJECTS
				</Menu.Item>
			</NavLink>
			<NavLink to='/hobbies'>
				<Menu.Item name="hobbies" active={activeItem === 'hobbies'} onClick={() => setActiveItem('hobbies')}>
					HOBBIES
				</Menu.Item>
			</NavLink>
		</Menu>
	);
}

export default NavBar