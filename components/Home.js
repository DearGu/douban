import React,{Component} from "react";
import ReactDOM from "react-dom";
import NavBar from "./NavBar";
import Content from "./Content";
import Film from "./Film";
import Book from "./Book";
import {HashRouter as Router,Route,Link} from "react-router-dom";

class Home extends Component{
	render(){
		return(
			<div className="Home">
				<NavBar match={this.props.match}/>
				<Route path={`${this.props.match.url}/hot`} component={Content}/>
				<Route path={`${this.props.match.url}/films`} component={Film}/>
				<Route path={`${this.props.match.url}/books`} component={Book}/>
			</div>
		)
	}
}

export default Home;
