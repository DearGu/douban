import React,{Component} from "react";
import ReactDOM from "react-dom";
import CardItem from "./CardItem"; 

class RowItem extends Component{
	constructor(props){
		super(props);
		/*touchStart:获取按下的位置  move_distance:滑动的距离  touchEnd:获取松开的位置  current_distance:卡片真实的距离*/
		this.state = {touchStart:0,move_distance:0,touchEnd:0,current_distance:0}
	}
	
	/*手指按下卡片获取按下位置*/
	horizontalStart(e){
		let start_dot = e.touches[0].clientX;
		this.setState({touchStart:start_dot});
	}
	
	/*手指滑动时计算滑动的距离*/
	horizontalScroll(e){
		let currentTarget = "";
		let moveX = e.touches[0].clientX;
		let currentX = moveX - this.state.touchStart + this.state.touchEnd;
		$(e.target).parents(".card-slide").length>0? currentTarget=$(e.target).parents(".card-slide"):currentTarget=$(e.target);
		this.setState({move_distance:currentX,current_distance:currentX});
		currentTarget.css({
			'transform':'translate('+currentX+'px,0)',
			'-webkit-transform':'translate('+currentX+'px,0)'
		});
					
	}
	
	/*手指离开*/
	horizontalEnd(e){
		let currentTarget = "";
		let card_width = Number($(".card-slide").css("width").split("px")[0])-Number($(".card-swipe").css("width").split("px")[0]);
		this.setState({touchEnd:this.state.move_distance});
		$(e.target).parents(".card-slide").length>0? currentTarget=$(e.target).parents(".card-slide"):currentTarget=$(e.target);
		/*弹回卡片第一项*/
		if(this.state.current_distance>0){
			currentTarget.css({
				'transform':'translate(0,0)',
				'-webkit-transform':'translate(0,0)'
			});
			this.setState({touchStart:0,touchEnd:0});
		}
		/*弹回卡片最后一项*/
		if(this.state.current_distance<-card_width){
			currentTarget.css({
				'transform':'translate('+(-card_width)+'px,0)',
				'-webkit-transform':'translate('+(-card_width)+'px,0)'
			});
			this.setState({touchStart:-card_width,touchEnd:-card_width});
		}
	}
	
	render(){
		return(
			<div className="row_item mb35">
				<div className="relative">
					<h2 className="type_title">{this.props.item.title}</h2>
					<span className="moreFilm">更多</span>
				</div>
				<div className="card-swipe pt15">
					<div className="card-slide clear" onTouchMove={this.horizontalScroll.bind(this)} onTouchStart={this.horizontalStart.bind(this)}
						onTouchEnd={this.horizontalEnd.bind(this)}>
						{
							this.props.item.list.map((list,index)=> <CardItem list={list} key={index}/>)
						}						
					</div>
				</div>
			</div>
		)
	}
}

export default RowItem;