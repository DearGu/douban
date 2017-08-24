import React,{Component} from "react";
import ReactDOM from "react-dom";
import NavBar from "./NavBar";
import Content from "./hot/Content";
import Film from "./film/Film";
import Book from "./book/Book";
import BoardCast from "./boardcast/BoardCast";
import {HashRouter as Router,Route,Link} from "react-router-dom";
import ImageView from "./ImageView";
import Search from "./Search/Search";

class Home extends Component{
	render(){
		return(
			<div className="Home">
				<NavBar match={this.props.match}/>
				<Route path={`${this.props.match.url}/hot`} component={Content}/>
				<Route path={`${this.props.match.url}/films`} component={Film}/>
				<Route path={`${this.props.match.url}/books`} component={Book}/>
				<Route path={`${this.props.match.url}/boardcast`} component={BoardCast}/>
				<ImageView/>
				<Search/>
			</div>
		)
	}
}

export default Home;
