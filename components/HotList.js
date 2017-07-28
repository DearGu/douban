import React,{Component} from "react";
import ReactDOM from "react-dom";
import HotListItem from "./HotListItem";

class HotList extends Component{
	render(){
		let lists = this.props.list;
		return(
			<div>
				{lists.map((list,index)=>{return <HotListItem list={list} key={index}/>})}
			</div>
		)
	}
}

export default HotList;
