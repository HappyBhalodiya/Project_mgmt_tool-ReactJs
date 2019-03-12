import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from "./App.js";
import MainScreen from './MainScreen';
import Leave from './leave';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Link } from 'react-router-dom';
ReactDOM.render(
	<div>
	<Router>
	<div>
	
     
	<Route exact path="/" component={MainScreen} />
	<Route  path="/leave" component={Leave} />


</div>
	</Router></div>
	, document.getElementById("root"));

