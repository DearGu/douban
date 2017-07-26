import React,{Component} from "react";
import ReactDOM from "react-dom";
import HotListItem from "./HotListItem";

class HotList extends Component{
	constructor(props){
		super(props);
		this.state = {hotList:[]};
	}
	
	componentWillMount(){
		let self = this;
		$.ajax({
			type:"get",
			url:"https://m.douban.com/rexxar/api/v2/recommend_feed",
			dataType:"jsonp",
			success:function(result){
				self.setState({hotList:result.recommend_feeds});
			}
		});
	}
	
	render(){
		let lists = this.state.hotList
		return(
			<div>
				{lists.map((list,index)=>{return <HotListItem list={list} key={index}/>})}
			</div>
		)
	}
}

export default HotList;
