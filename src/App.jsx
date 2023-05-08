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
import Stats from './components/Stats';
import Test from './components/Test';

function App() {
	return (
		<BrowserRouter>
			<div className='app flex flex-col items-center pb-20'>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/statistics' element={<Stats />} />
					<Route path='/test' element={<Test />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
