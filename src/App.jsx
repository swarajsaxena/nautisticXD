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

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={
						<div className='flex items-center flex-col gap-4'>
							<div>
								<a href='https://react.dev' target='_blank'>
									<img
										src={reactLogo}
										className='logo react animate-spin'
										alt='React logo'
									/>
								</a>
							</div>
							<h1 className='text-5xl font-semibold'>React Template</h1>
							<div>With</div>
							<div>Redeux + Router + TailwindCSS</div>
						</div>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
