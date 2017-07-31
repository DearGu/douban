import React,{Component} from "react";
import ReactDOM from "react-dom";
import HotListItem from "./HotListItem";

class HotList extends Component{
	render(){
		let lists = this.props.list.recommend_feeds;
		return(
			<div>
				{lists.map((list,index)=>{return <HotListItem list={list} key={index} index={index} show_date={this.props.show_date}/>})}
			</div>
		)
	}
}

export default HotList;
