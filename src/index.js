import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from "./App.js";
import MainScreen from './MainScreen';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Link } from 'react-router-dom';
ReactDOM.render(
	<div>
	<Router>
	<div>
	
     
	<Route exact path="/" component={MainScreen} />

</div>
	</Router></div>
	, document.getElementById("root"));

