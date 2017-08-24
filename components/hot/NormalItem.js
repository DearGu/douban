import React,{Component} from "react";
import ReactDOM from "react-dom";

class NormalItem extends Component{
	render(){
		return(
			<div className="item_wrap flexDiv mb10">
				<div className="flexItem_dobule">
					<h3>{this.props.list.title}</h3>
					<p>{this.props.list.target.desc}</p>
				</div>
				{
					this.props.list.target.cover_url? <div className="hot_img" style={{background:`url(${this.props.list.target.cover_url}) no-repeat`,backgroundSize:"cover"}}></div>:<div></div>
				}				
			</div>
		)
	}
}

export default NormalItem;
