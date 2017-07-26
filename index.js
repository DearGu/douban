import React,{Component} from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home";
import Content from "./components/Content";
import "./scss/common.scss";
import {HashRouter as Router,Route,Link} from "react-router-dom";

class App extends Component{
	render(){
		return(
			<div className="wrap">
				<Route path="/home" component={Home}/>
			</div>
		)
	}
}

ReactDOM.render(
	<Router>
		<App></App>
	</Router>
	,document.querySelector("#root"));