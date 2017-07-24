import React,{Component} from "react";
import ReactDOM from "react-dom";
import "./scss/index.scss";

class App extends Component{
	render(){
		return(
			<div className="test">
				<p>12345</p>
			</div>
		)
	}
}

ReactDOM.render(<App/>,document.querySelector("#root"));