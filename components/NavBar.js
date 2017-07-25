import React,{Component} from "react";
import ReactDOM from "react-dom";
import "../scss/NavBar.scss";

class NavBar extends Component{
	render(){
		return(
			<div className="NavBar fixed">
				<div className="NavBar-inner">
					<a href="#">
						<h1 className="logo">豆瓣</h1>
					</a>
					<ul className="flexDiv">
						<li className="flexItem mr15">电影</li>
						<li className="flexItem mr15">图书</li>
						<li className="flexItem mr15">广播</li>
						<li className="flexItem mr15">小组</li>
						<li className="flexItem">搜索</li>
					</ul>
				</div>
			</div>
		)
	}
}

export default NavBar;
