import React from 'react';
import {
	HashRouter as Router,
	Switch,
	Route,
	Redirect
} from 'react-router-dom';
// import { Header } from './Components/index';
import Heroes from './Pages/Heroes';
import './App.scss';

const App = () => {
	return (
		<Router>
			<div className="App">
				{/* <Header /> */}
				<Switch>
					<Route exact path="/dashboard" component={Heroes} />
					<Redirect from="/*" to="/dashboard" />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
