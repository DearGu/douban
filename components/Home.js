import React,{Component} from "react";
import ReactDOM from "react-dom";
import NavBar from "./NavBar";
import Content from "./Content";
import {HashRouter as Router,Route,Link} from "react-router-dom";

class Home extends Component{
	render(){
		return(
			<div className="Home">
				<NavBar/>
				<Route path={`${this.props.match.url}/hot`} component={Content}/>
			</div>
		)
	}
}

export default Home;
