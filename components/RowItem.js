import React,{Component} from "react";
import ReactDOM from "react-dom";
import CardItem from "./CardItem"; 
import {HashRouter as Router,Route,Link} from "react-router-dom";

class RowItem extends Component{
	render(){
		return(
			<div className="row_item mb35">
				<div className="relative">
					<h2 className="type_title">{this.props.item.title}</h2>
					{
						this.props.moreType=="film"? <Link to={`/home/filmsmore/${this.props.item.locId}`} className="moreFilm">更多</Link>:
							<span className="moreFilm">更多</span>
					}	
				</div>
				{
					this.props.item.header? (
						<div className="mt15 clear">
							<img src={this.props.item.header.cover.url} className="cover mr15"/>							
							<div>
								<p className="book_title">{this.props.item.header.title}<span className="book_price">¥ {this.props.item.header.price}</span></p>
								<p className="book_info">{this.props.item.header.info}</p>
							</div>
						</div>
					):""
				}
				<div className="card-swipe pt15">
					<div className="card-slide clear">
						{
							this.props.item.list.map((list,index)=> <CardItem list={list} key={index} cardType={this.props.cardType}/>)
						}						
					</div>
				</div>
			</div>
		)
	}
}

export default RowItem;