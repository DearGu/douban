import React,{Component} from "react";
import ReactDOM from "react-dom";
import "../../scss/search.scss";
import {connect} from "react-redux";
import * as action from "../../redux/action/index";
import bgUrl from "../../images/search.png";
import createHashHistory from "history/createHashHistory";

class Search extends Component{
	/*聚焦失焦的时候改变input框背景*/
	handleFocusInput(e){
		$(e.target).addClass("focus_input");
	}
	
	handleBlurInput(e){
		$(e.target).removeClass("focus_input");
	}
	
	/*关闭搜索页*/
	handleCloseSearch(){
		this.props.closeSearch();
	}
	
	handleLogin(){
		!this.props.searchMsg.IndexReudcer.isLogin? createHashHistory().push("/login"):"";
	}
	
	render(){
		return(
			<div className="search_wrap" style={{display: this.props.searchMsg.IndexReudcer.isSearch? "block":"none"}}>
				<div className="search_bar">
					<span onTouchEnd={this.handleCloseSearch.bind(this)}>关闭</span>
					<form action="https://m.douban.com/search">
						<input type="search" className="blur_input" name="query" onFocus={this.handleFocusInput.bind(this)} onBlur={this.handleBlurInput.bind(this)}/>
					</form>
				</div>
				<ul className="tab_wrap">
					<li>
						<div>
							<h2 className="c2384E8">电影</h2>
							<p>影院热映</p>
						</div>
						<div>
							<h2 className="ce6467e">同城</h2>
							<p>周末活动</p>
						</div>
						<div>
							<h2 className="c9F7860">阅读</h2>
							<p>电子书</p>
						</div>
						<div>
							<h2 className="ce1644d">东西</h2>
							<p>心爱之物</p>
						</div>
					</li>
					<li>
						<div>
							<h2 className="c7a6adb">电视</h2>
							<p>正在热播</p>
						</div>
						<div>
							<h2 className="c2AB8CC">小组</h2>
							<p>志趣相投</p>
						</div>
						<div>
							<h2 className="c5774c5">游戏</h2>
							<p>虚拟世界</p>
						</div>
						<div>
							<h2 className="c40cfa9">FM</h2>
							<p>心爱歌单</p>
						</div>
					</li>
					<li>
						<div>
							<h2 className="c9F7860">图书</h2>
							<p>畅销排行</p>
						</div>
						<div>
							<h2 className="cf48f2e">音乐</h2>
							<p>新碟榜</p>
						</div>
						<div>
							<h2 className="c596cdd">应用</h2>
							<p>玩手机</p>
						</div>
						<div>
							<h2 className="c42bd56">市集</h2>
							<p>购买原创</p>
						</div>
					</li>
				</ul>
				<div className="nav_item flexDiv">
					<span>注册账号</span>
					<span onTouchEnd={this.handleLogin.bind(this)}>登录豆瓣</span>
				</div>
				<div className="nav_item flexDiv">
					<span>使用桌面版</span>
					<span>使用豆瓣App</span>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) =>{
	return{
		searchMsg:state
	}
}

export default connect(mapStateToProps,action)(Search);
