import React,{Component} from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Content from "./components/Content";
import "./scss/common.scss";
import {HashRouter as Router,Route,Link} from "react-router-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import Reducer from "./redux/reducer/reducer.js";

const store = createStore(Reducer);

class App extends Component{
	render(){
		return(
			<div className="wrap">
				<Route path="/home" component={Home}/>
				<Route path="/login" component={Login}/>
			</div>
		)
	}
}

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App></App>
		</Router>
	</Provider>
	,document.querySelector("#root"));