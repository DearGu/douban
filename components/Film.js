import React,{Component} from "react";
import ReactDOM from "react-dom";
import FilmItem from "./FilmItem"; 

class Film extends Component{
	constructor(props){
		super(props);
		/*touchStart:获取按下的位置  move_distance:滑动的距离  touchEnd:获取松开的位置  current_distance:卡片真实的距离*/
		this.state = {hotFilm:[],touchStart:0,move_distance:0,touchEnd:0,current_distance:0};
	}
	
	componentWillMount(){
		this.loadHotFilm();
	}
	
	/*加载影院热映数据*/
	loadHotFilm(){
		let self = this;
		$.ajax({
			type:"get",
			url:"https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items",
			data:{start:0,count:8},
			dataType:"jsonp",
			success:function(result){
				self.setState({hotFilm:result.subject_collection_items});
			}
		});
	}
	
	/*手指按下卡片获取按下位置*/
	horizontalStart(e){
		let start_dot = e.touches[0].clientX;
		this.setState({touchStart:start_dot});
	}
	
	/*手指滑动时计算滑动的距离*/
	horizontalScroll(e){
		let moveX = e.touches[0].clientX;
		let currentX = moveX - this.state.touchStart + this.state.touchEnd;
		/*禁止上下滑动*/
		e.preventDefault();
		this.setState({move_distance:currentX,current_distance:currentX});
		$(".card-slide").css({
			'transform':'translate('+currentX+'px,0)',
			'-webkit-transform':'translate('+currentX+'px,0)'
		});
	}
	
	/*手指离开*/
	horizontalEnd(e){
		let card_width = Number($(".card-slide").css("width").split("px")[0])-Number($(".card-swipe").css("width").split("px")[0]);
		this.setState({touchEnd:this.state.move_distance});
		if(this.state.current_distance>0){
			$(".card-slide").css({
				'transform':'translate(0,0)',
				'-webkit-transform':'translate(0,0)'
			});
			this.setState({touchStart:0,touchEnd:0});
		}
		if(this.state.current_distance<-card_width){
			$(".card-slide").css({
				'transform':'translate('+(-card_width)+'px,0)',
				'-webkit-transform':'translate('+(-card_width)+'px,0)'
			});
			this.setState({touchStart:-card_width,touchEnd:-card_width});
		}
	}
	
	render(){
		return(
			<div className="content">
				<div className="pt10">
					<div className="row_item">
						<div className="type_title">影院热映</div>
						<div className="card-swipe pt15">
							<div className="card-slide clear" onTouchMove={this.horizontalScroll.bind(this)} onTouchStart={this.horizontalStart.bind(this)}
								onTouchEnd={this.horizontalEnd.bind(this)}>
								{
									this.state.hotFilm.map((list,index)=> <FilmItem list={list} key={index}/>)
								}						
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Film;