import React from 'react'
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'

function NavBar() {

	return (
		<Menu>
			<Menu.Item name='about-me'>
				<NavLink to='/'>
					ABOUT ME
				</NavLink>
			</Menu.Item>
				<Menu.Item name='projects'>
				<NavLink to='/projects'>
					PROJECTS
				</NavLink>
			</Menu.Item>
			<Menu.Item name="hobbies">
				<NavLink to='/hobbies'>
					HOBBIES
				</NavLink>
			</Menu.Item>
		</Menu>
	);
}

export default NavBar