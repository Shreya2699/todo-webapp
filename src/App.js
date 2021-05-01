import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Login from "./components/Login";

// in this project you will learn some more react fundamentals and about bootstrap 

class App extends React.Component {

	constructor() {
		super();

		this.state = {
			"todoitems": [
				{
					"id":1,
					"text":"I want to work for bla bla bla.",
					isCompleted: false
				},
				{
					"id":2,
					"text":"I want to dance.",
					isCompleted: false
				},
				{
					"id":3,
					"text":"I want to sing.",
					isCompleted: false
				},
				{
					"id":4,
					"text":"I want sleep.",
					isCompleted: false
				}
			],
			
			"firstname":"aman ",
			"isLoggedIn":false
		}
	}


	render() {

		return (
			<div>
				<Header />

				{
					(this.state.isLoggedIn)
					?
					(
						<Main todoitems={this.state.todoitems} />
					)
					:
					(
						<Login />	
					)
				}
				
				<Footer />
			</div>
		)
	}

}


export default App;


// four terminology in react for login systems 
// for login - login button, signin button
// for register/create new account - register button, logon button, signup 


// if the user is loggedin : 
// 	Main
// if he is not logged in 
// 	he need to login -> Login
//  he need to signup -> Signup