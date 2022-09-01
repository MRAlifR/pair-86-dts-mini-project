import { Route, Routes } from 'react-router-dom';

import './App.css';
import ProtectedComponent from './components/ProtectedComponent';
import DetailPage from './containers/DetailPage';
import HomePage from './containers/HomePage';
import LoginRegisterPage from './containers/LoginRegisterPage';

const App = () => {
	return (
		<div className='App'>
			<Routes>
				<Route
					path='/'
					element={
						<ProtectedComponent>
							<HomePage />
						</ProtectedComponent>
					}
				/>
				<Route
					path='/:movieId'
					element={
						<ProtectedComponent>
							<DetailPage />
						</ProtectedComponent>
					}
				/>
				<Route path='/login' element={<LoginRegisterPage />} />
			</Routes>
		</div>
	);
};

export default App;
