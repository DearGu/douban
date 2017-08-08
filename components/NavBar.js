import React,{Component} from "react";
import ReactDOM from "react-dom";
import "../scss/NavBar.scss";
import {HashRouter as Router,Route,Link} from "react-router-dom";

class NavBar extends Component{
	render(){
		return(
			<div className="NavBar">
				<div className="NavBar-inner">					
					<Link to={`${this.props.match.url}/hot`}>
						<h1 className="logo">
							豆瓣
						</h1>
					</Link>			
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
						<li>
							<span className="search_logo"></span>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}

export default NavBar;
