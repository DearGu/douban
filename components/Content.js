import React,{Component} from "react";
import ReactDOM from "react-dom";
import QuickNav from "./QuickNav";
import HotList from "./HotList";
import "../scss/content.scss"

class Content extends Component{
	constructor(props){
		/*hotList:数据列表  moreTip:是否显示loading动画  lock_scroll:滑动锁(避免加载更多的时候请求多次)*/
		super(props);
		this.state = {hotList:[],moreTip:true,lock_scroll:false};
		this.currentDate = new Date();
		this.sumDate = 0;
		this.window_height = 0;
	}
	
	componentWillMount(){
		this.loadListData(1);
		this.window_height = $(window).height();
	}
	
	/*加载数据*/
	loadListData(isNow){
		let data_date="";
		let pre_date =new Date(this.currentDate.getTime() - this.sumDate).toLocaleDateString();
		let self = this;
		/*ios日期显示格式会变成年月日*/
		isNow? data_date="":data_date=pre_date.replace(/(\/|年|月|日)/g,"-");
		/*ios年月日替换为-后,要把最后一个-去掉*/
		data_date.slice(-1)=="-"? data_date=data_date.slice(0,-1):"";
		this.setState({lock_scroll:true})
		$.ajax({
			type:"get",
			url:"https://m.douban.com/rexxar/api/v2/recommend_feed",
			data:{next_date:data_date,for_mobile:1,alt:"json"},
			dataType:"jsonp",
			success:function(result){
				self.setState({hotList:self.state.hotList.concat(result),moreTip:false,lock_scroll:false})
				/*86400000为一天的毫秒数*/
				!isNow? self.sumDate += 86400000:"";
			}
		});
	}
	
	/*上拉加载更多*/
	loadMore(e){
		const ScrollHight = document.querySelector(".content").scrollHeight;
        const ScrollTop = document.querySelector(".content").scrollTop;
        const OffsetHeight = document.querySelector(".content").offsetHeight;
        if(ScrollHight-ScrollTop-OffsetHeight<=0&&!this.state.lock_scroll){
        	this.setState({moreTip:true});
        	this.loadListData(0);
        }
	}	
	
	render(){
		return(
			<div className="content" style={{height:this.window_height}} onTouchMove={this.loadMore.bind(this)} onScroll={this.loadMore.bind(this)}>
				<div className="content_wrap">
					<QuickNav/>
					{
						this.state.hotList.map((list,index)=>{return <HotList list={list} show_date={{data_date:list.date,wrapIdx:index}} key={index}/>})
					}
					<div className="moreTip" style={{display:this.state.moreTip? "block":"none"}}>
						<span></span>
				        <span></span>
				        <span></span>
					</div>
				</div>
			</div>
		)
	}
}

export default Content;
