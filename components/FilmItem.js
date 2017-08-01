import React,{Component} from "react";
import ReactDOM from "react-dom";

class FilmItem extends Component{
	render(){
		return(
			<div className="film_item fl">
				<div className="film_cover" style={{background:`url(${this.props.list.cover.url}) no-repeat center`,backgroundSize:"cover"}}></div>
				<div></div>
			</div>
		)
	}
}

export default FilmItem;
