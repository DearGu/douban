import React,{Component} from "react";
import ReactDOM from "react-dom";
import BoardCastTemplate from "./BoardCastTemplate";

class BoardCastItem extends Component{
	render(){
		let reshared_status = this.props.list.status.reshared_status;
		let normal_status = this.props.list.status;
		return(
			<div className="boardcast_item">
				{
					reshared_status? (
						<div>
							<p className="reshare">{normal_status.author.name} {normal_status.activity} <span></span></p>
							<BoardCastTemplate content={reshared_status}/>
						</div>
					):<BoardCastTemplate content={normal_status}/>
				}				
			</div>
		)
	}
}

export default BoardCastItem;