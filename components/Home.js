import React,{Component} from "react";
import ReactDOM from "react-dom";
import NavBar from "./NavBar";

class Home extends Component{
	render(){
		return(
			<div className="Home">
				<NavBar/>
				{/*<QuickNav/>
				<HotList/>*/}
			</div>
		)
	}
}

export default Home;
