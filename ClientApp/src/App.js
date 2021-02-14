import 'fontsource-roboto';
import React, {Component} from 'react';
import {Route} from 'react-router';
import {Button} from '@material-ui/core';

import {Layout} from './components/Layout';
//import { Home } from './components/Home';
//import { FetchData } from './components/FetchData';
import {Counter} from './components/Counter';
import './custom.css'

export default class App extends Component {
	static displayName = App.name;

	render() {
		return (
			<Layout>
				<Route path='/counter' component={Counter}/>
				{/*<Route exact path='/' component={Home} />
        <Route path='/fetch-data' component={FetchData} />*/}
			</Layout>
		);
	}
}
