import React,{Component} from "react";
import ReactDOM from "react-dom";
import "../../scss/filmMore.scss";
import CardItem from "../CardItem";

class FilmMore extends Component{
	constructor(props){
		super(props);
		/*FilmArr:HotFilm数据列表  lock_scroll:滑动锁  isAjax:控制数据为空时候不进行loadmore  film_type:电影类型标题*/
		this.state = {FilmArr:[],lock_scroll:false,startNum:0,isAjax:true,film_type:""}
	}
	
	componentWillMount(){
		console.log(this.props.match.params.locId);
		this.window_height = $(window).height() - 47;
		switch(this.props.match.params.locId){
    		case "hot_film":
    			this.getHotFilm();
    			break;
    		case "free_film":
    			this.getFreeFilm();
    			break;
    		case "new_film":
    			this.getNewFilm();
    	}
	}
	
	/*获取影院热映数据*/
	getHotFilm(){
		let self = this;
		this.setState({lock_scroll:true});
		$.ajax({
			type:"get",
			url:"https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items",
			data:{start:self.state.startNum,count:18},
			dataType:"jsonp",
			success:function(result){
				result.subject_collection_items.length>0?
				self.setState({FilmArr:self.state.FilmArr.concat(result.subject_collection_items),lock_scroll:false,startNum:self.state.startNum+18,
					film_type:"影院热映"}):
				self.setState({isAjax:false});
			}
		});
	}
	
	/*获取免费电影数据*/
	getFreeFilm(){
		let self = this;
		this.setState({lock_scroll:true});
		$.ajax({
			type:"get",
			url:"https://m.douban.com/rexxar/api/v2/subject_collection/movie_free_stream/items",
			data:{start:self.state.startNum,count:18},
			dataType:"jsonp",
			success:function(result){
				result.subject_collection_items.length>0?
				self.setState({FilmArr:self.state.FilmArr.concat(result.subject_collection_items),lock_scroll:false,startNum:self.state.startNum+18,
					film_type:"免费在线观看新片"}):
				self.setState({isAjax:false});
			}
		});
	}
	
	/*获取新电影数据*/
	getNewFilm(){
		let self = this;
		this.setState({lock_scroll:true});
		$.ajax({
			type:"get",
			url:"https://m.douban.com/rexxar/api/v2/subject_collection/movie_latest/items",
			data:{start:self.state.startNum,count:18},
			dataType:"jsonp",
			success:function(result){
				result.subject_collection_items.length>0?
				self.setState({FilmArr:self.state.FilmArr.concat(result.subject_collection_items),lock_scroll:false,startNum:self.state.startNum+18,
					film_type:"新片速递"}):
				self.setState({isAjax:false});
			}
		});
	}
	
	/*上拉加载更多*/
	loadMoreFilm(){
		const ScrollHight = document.querySelector(".content").scrollHeight;
        const ScrollTop = document.querySelector(".content").scrollTop;
        const OffsetHeight = document.querySelector(".content").offsetHeight;
        if(ScrollHight-ScrollTop-OffsetHeight<=0&&!this.state.lock_scroll&&this.state.isAjax){
        	switch(this.props.match.params.locId){
        		case "hot_film":
        			this.getHotFilm();
        			break;
        		case "free_film":
        			this.getFreeFilm();
        			break;
        		case "new_film":
        			this.getNewFilm();
        	}
        }
	}
	
	render(){
		return(
			<div className="content" style={{height:this.window_height}} onTouchMove={this.loadMoreFilm.bind(this)} onScroll={this.loadMoreFilm.bind(this)}>
				<div className="content_wrap" style={{padding:"0 10px"}}>
					<h1 className="filmMore_title">{this.state.film_type}</h1>
					<div className="film_wrap">
						{
							this.state.FilmArr.map((list,index)=> <CardItem list={list} key={index} cardType="rating"/>)
						}
					</div>
				</div>
			</div>
		)
	}
}

export default FilmMore;
