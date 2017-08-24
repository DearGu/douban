import React,{Component} from "react";
import ReactDOM from "react-dom";
import "../scss/NavBar.scss";
import {HashRouter as Router,Route,Link} from "react-router-dom";
import {connect} from "react-redux";
import * as action from "../redux/action/index";
import {bindActionCreators} from "redux";
import createHashHistory from "history/createHashHistory";

class NavBar extends Component{
	changeReportBtn(){
		$(".report_btn").hide();
	}
	
	handleSearch(){
		this.props.actions.openSearch();
	}
	
	handleGoIndex(){
		createHashHistory().push(`${this.props.match.url}/hot`);
	}
	
	render(){
		return(
			<div className="NavBar" onTouchEnd={this.changeReportBtn.bind(this)}>
				<div className="NavBar-inner">					
					<h1 className="logo" onTouchEnd={this.handleGoIndex.bind(this)}>
						豆瓣
					</h1>		
					<ul className="flexDiv">
						<li className="mr15">
							<Link to={`${this.props.match.url}/films`} className="c2384E8">
								电影
							</Link>							
						</li>
						<li className="mr15">
							<Link to={`${this.props.match.url}/books`} className="c9F7860">
								图书
							</Link>									
						</li>
						<li className="mr15">
							<Link to={`${this.props.match.url}/boardcast`} className="cE4A813">
								广播
							</Link>	
						</li>
						<li className="mr15 c2AB8CC">小组</li>
						<li onTouchEnd={this.handleSearch.bind(this)}>
							<span className="search_logo"></span>
						</li>
					</ul>
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

const mapDispatchToProps = (dispatch) =>{
	return{
		actions:bindActionCreators(action,dispatch)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(NavBar);
