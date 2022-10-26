import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from "./NavBar";
import AboutMe from './AboutMe';
import Projects from './Projects'
import Hobbies from './Hobbies'

function App() {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path="/projects" element={<Projects />} />
				<Route path="/" element={<AboutMe />} />
				<Route path="/hobbies" element={<Hobbies />} />
			</Routes>
		</>
	);
}

export default App;
