import React,{Component} from "react";
import ReactDOM from "react-dom";

class DownLoad extends Component{	
	render(){
		return(
			<div className="footer">
				<div className="down_load_wrap clear">
					<div className="down_load_img fl"></div>
					<div className="fl">
						<p className="down_load_title">豆瓣</p>
						<p className="fz14 c111">{this.props.msg}</p>
					</div>
				</div>
				<div className="c42bd56">去 App Store 免费下载 iOS 客户端</div>
			</div>
		)
	}
}

export default DownLoad;
