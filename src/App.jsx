import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import {
	createBrowserRouter,
	RouterProvider,
	BrowserRouter,
	Route,
	Routes,
} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
	return (
		<BrowserRouter>
			<div className='app flex flex-col items-center'>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
