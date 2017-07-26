import React,{Component} from "react";
import ReactDOM from "react-dom";
import QuickNav from "./QuickNav";
import HotList from "./HotList";
import "../scss/content.scss"

class Content extends Component{
	render(){
		return(
			<div className="content">
				<QuickNav/>
				<HotList/>
			</div>
		)
	}
}

export default Content;
