import React,{Component} from "react";
import ReactDOM from "react-dom";

class PicItem extends Component{
	render(){
		return(
			<div>
				<div className="item_wrap flexDiv mb10">
					<div className="bigPic" style={{background:`url(${this.props.list.target.cover_url}) no-repeat`,backgroundSize:"cover"}}></div>
					<div className="flexItem">
						<div className="picDiv mb5" style={{background:`url(${this.props.list.target.more_pic_urls[0]}) no-repeat`,backgroundSize:"cover"}}></div>
						<div className="picDiv relative" style={{background:`url(${this.props.list.target.more_pic_urls[1]}) no-repeat center`,backgroundSize:"cover"}}>
							<span className="photo_count"><span>{this.props.list.target.photos_count}+</span></span>
						</div>
					</div>
				</div>
				<h3 className="mb10">{this.props.list.title}</h3>
			</div>
		)
	}
}

export default PicItem;