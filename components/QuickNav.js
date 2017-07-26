import React,{Component} from "react";
import ReactDOM from "react-dom";

class QuickNav extends Component{
	render(){
		return(
			<div className="mt20 quickNav">
				<ul className="clear">
					<li>
						影院热映
					</li>
					<li>
						欧美新碟榜
					</li>
					<li>
						豆瓣时间
					</li>
					<li>
						使用豆瓣App
					</li>
				</ul>
			</div>
		)
	}
}

export default QuickNav;
