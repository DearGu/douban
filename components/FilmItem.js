import React,{Component} from "react";
import ReactDOM from "react-dom";

class FilmItem extends Component{
	constructor(props){
		super(props);
		this.star_num = 0;
		this.star_rate = 0;
		this.arr = [1,2,3,4,5];
	}
	
	render(){
		return(
			<div className="film_item fl">
				<div className="film_cover" style={{background:`url(${this.props.list.cover.url}) no-repeat center`,backgroundSize:"cover"}}></div>
				<div>
					<p className="film_title">{this.props.list.title}</p>
					<div className="film_rating">
						<span>
							{
								this.props.list.rating!==null? (
									this.star_rate = this.props.list.rating.value/this.props.list.rating.max*5,
									this.star_rate - parseInt(this.star_rate)>0.5? this.star_num = parseInt(this.star_rate)+1:this.star_num = parseInt(this.star_rate),
									this.arr.map((item,idx)=> this.star_num-->0? <span key={idx} className="light_star"></span>:<span key={idx} className="normal_star"></span>)
								):<span>暂无评分</span>
							}
						</span>
						{
							this.props.list.rating!==null? <span className="ml3">{this.props.list.rating.value.toFixed(1)}</span>:""
						}
					</div>
				</div>
			</div>
		)
	}
}

export default FilmItem;
