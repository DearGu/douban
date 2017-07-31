import React,{Component} from "react";
import ReactDOM from "react-dom";
import NormalItem from "./NormalItem";
import PicItem from "./PicItem";

class HotListItem extends Component{	
	render(){
		return(
			<div>
				{
					this.props.index==0&&this.props.show_date.wrapIdx!=0? <div className="DateTitle">{this.props.show_date.data_date}</div>:""
				}
				<div className="hotListItem">
					{
						this.props.list.target.more_pic_urls.length==0? <NormalItem list={this.props.list}/>:<PicItem list={this.props.list}/>
					}				
					<div className="clear authorMsg">
						<span className="fl">by {this.props.list.target.author.name}</span>
						<span className="fr">{this.props.list.source_cn}</span>
					</div>
				</div>
			</div>
		)
	}
}

export default HotListItem;
