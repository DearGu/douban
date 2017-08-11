import React,{Component} from "react";
import ReactDOM from "react-dom";
import userPic from "../images/user_normal.jpg";
import BoardCastItem from "./BoardCastItem";

class BoardCast extends Component{
	constructor(props){
		super(props);
		this.state = {boardCastArr:[]}
		this.window_height = 0;
	}
	
	componentWillMount(){
		this.loadBoardCast();
		this.window_height = $(window).height();
	}
	
	loadBoardCast(){
		let self = this;
		$.ajax({
			type:"get",
			url:"https://m.douban.com/rexxar/api/v2/status/anonymous_timeline",
			dataType:"jsonp",
			success:function(result){
				self.setState({boardCastArr:self.state.boardCastArr.concat(result.items)});
			}
		});
	}
	
	changeReportBtn(){
		$(".report_btn").hide();
	}
	
	render(){
		return(
			<div className="content" style={{height:this.window_height}} onTouchEnd={this.changeReportBtn.bind(this)}>
				<div className="download_tips">
					<div className="download_tips_wrap">
						<div className="">打开App, 回复广播</div>
						<div className="">
							<span className="fast_download_btn">极速下载</span>
							<span className="open_app_btn">打开</span>
						</div>
					</div>
				</div>
				<div className="status_bar">
					<div>
						<img src={userPic}/>
						<span className="caaa fz15">登录发广播</span>
					</div>
					<div>
						<span className="icon_pen"></span>
						<span className="icon_camera"></span>
					</div>
				</div>
				<div className="content_wrap">
					{
						this.state.boardCastArr.map((item,idx)=> <BoardCastItem list={item} key={idx}/>)
					}					
				</div>
			</div>
		)
	}
}

export default BoardCast;
