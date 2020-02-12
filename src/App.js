import React, {useState, useEffect} from 'react';
import {
	HashRouter as Router,
	Switch,
	Route,
	Redirect
} from 'react-router-dom';
import axios from "axios";
import {HeroCard, HeroProfile} from "./Components";
import './App.scss';

const App = () => {
	const [lists, setLists] = useState([]);
	useEffect(() =>　{
		getLists();
	},[]);
	const getLists = () => {
		axios.get("http://hahow-recruit.herokuapp.com/heroes")
		.then(res =>　setLists(res.data))
		.catch(err => console.log(err))
	};
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route exact path="/heroes">
						<div className="container">
							<div className="hero_list">
								{lists.map(item => <HeroCard data={item} key={item.id}/>)}
							</div>
						</div>
					</Route>
					<Route path="/heroes/:heroId">
						<div className="container">
							<div className="hero_list">
								{lists.map(item => <HeroCard data={item} key={item.id}/>)}
							</div>
							<HeroProfile/>
						</div>
					</Route>
					<Redirect from="/*" to="/heroes" />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
