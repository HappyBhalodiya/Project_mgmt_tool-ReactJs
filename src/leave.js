import React, { Component} from "react";
import "./App.css";
import { Provider } from 'react-redux';
import {hot} from "react-hot-loader";
import { createStore } from 'redux';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


export default class Leave extends Component{


	render() {
		return (
			

			
			<Card className="cardLeave">

			<Card.Body>
			<Card.Title className="cardTitleLeave"><h1>Leave Application</h1></Card.Title>
			<Card.Text>
			Some quick example text to build on the card title and make up the bulk of
			the card's content.
			</Card.Text>
			<Button variant="primary">Go somewhere</Button>
			</Card.Body>
			</Card>
			

			)
	}
}
