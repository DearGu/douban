import React,{Component} from "react";
import ReactDOM from "react-dom";
import QuickNav from "./QuickNav";
import HotList from "./HotList";
import "../scss/content.scss"

class Content extends Component{
	constructor(props){
		super(props);
		this.state = {hotList:[],moreTip:true};
		this.currentDate = new Date();
		this.sumDate = 86400000;
	}
	
	componentWillMount(){
		this.loadListData(1);
	}
	
	loadListData(isNow){
		let data_date="";
		let pre_date =new Date(this.currentDate.getTime() - this.sumDate).toLocaleDateString();
		isNow? data_date="":data_date=pre_date.replace(/\//g,"-");
		let self = this;
		$.ajax({
			type:"get",
			url:"https://m.douban.com/rexxar/api/v2/recommend_feed",
			data:{next_date:data_date},
			dataType:"jsonp",
			success:function(result){
				console.log(result.recommend_feeds);
				self.setState({hotList:self.state.hotList.concat(result.recommend_feeds),moreTip:false});
				/*86400000为一天的毫秒数*/
				self.sumDate += 86400000;
			}
		});
	}
	
	loadMore(){
		const self = this;
		document.querySelector(".content").onscroll = function(e){
			const ScrollHight = e.target.scrollHeight;
	        const ScrollTop = e.target.scrollTop;
	        const OffsetHeight = e.target.offsetHeight;	    
	        if(ScrollHight-ScrollTop-OffsetHeight<=0){
	        	self.setState({moreTip:true});
//	        	self.loadListData(0);
	        }
		}
	}	
	
	render(){
		return(
			<div className="content" onScroll={this.loadMore.bind(this)}>
				<QuickNav/>
				<HotList list={this.state.hotList}/>
				<div className="moreTip" style={{display:this.state.moreTip? "block":"none"}}>
					<span></span>
			        <span></span>
			        <span></span>
				</div>
			</div>
		)
	}
}

export default Content;
