import React,{Component} from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home";
import "./scss/common.scss";

class App extends Component{
	render(){
		return(
			<div className="wrap">
				<Home/>
			</div>
		)
	}
}

ReactDOM.render(<App/>,document.querySelector("#root"));