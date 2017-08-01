import React,{Component} from "react";
import ReactDOM from "react-dom";
import FilmItem from "./FilmItem"; 

class Film extends Component{
	constructor(props){
		super(props);
		this.state = {hotFilm:[]};
	}
	
	componentWillMount(){
		this.loadHotFilm();
	}
	
	loadHotFilm(){
		let self = this;
		$.ajax({
			type:"get",
			url:"https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items",
			data:{start:0,count:8},
			dataType:"jsonp",
			success:function(result){
				console.log(result);
				self.setState({hotFilm:result.subject_collection_items});
			}
		});
	}
	
	render(){
		let opt = {
			distance: 30, // 每次移动的距离，卡片的真实宽度
			currentPoint: 0,// 初始位置，默认从0即第一个元素开始
			swTouchend: (ev) => {
			    let data = {
			        moved: ev.moved,
			        originalPoint: ev.originalPoint,
			        newPoint: ev.newPoint,
			        cancelled: ev.cancelled
			    }
			    console.log(ev);
			    this.setState({
			        curCard: ev.newPoint
			    })
			}
		}
		return(
			<div className="content">
				<div className="pt10">
					<div className="row_item">
						<div className="type_title">影院热映</div>
						<div className="card-swipe">
							<div className="card-slide clear">
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