/* eslint-disable linebreak-style */

import './App.css';
import MainPage from './Pages/MainPage/MainPage';
import LogIn from './Pages/LogIn/LogIn';
import SignUp from './Pages/SignUp/SignUp';
import React from 'react';
import {
	BrowserRouter,
	Routes,
	Route
} from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainPage/>} />
				<Route path="/login" element={<LogIn/>} />
				<Route path="/signup" element={<SignUp/>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
