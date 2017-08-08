import React,{Component} from "react";
import ReactDOM from "react-dom";
import CardRating from "./CardRating";

class CardItem extends Component{
	render(){
		return(
			<div className="card_item">
				<div className="card_cover" style={{background:`url(${this.props.list.cover.url}) no-repeat center`,backgroundSize:"cover"}}></div>
				<div>
					<p className="card_title">{this.props.list.title}</p>
					{
						this.props.cardType=="rating"? <CardRating list={this.props.list}/>:<div className="card_rating">¥ {this.props.list.price}</div>
					}
				</div>
			</div>
		)
	}
}

export default CardItem;
