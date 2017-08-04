import React,{Component} from "react";
import ReactDOM from "react-dom";
import RowItem from "./RowItem";

class Film extends Component{
	constructor(props){
		super(props);
		this.state = {FilmArr:[]};
		this.typeList = ["经典","冷门佳片","豆瓣高分","动作","喜剧","爱情","悬疑","恐怖","科幻","治愈","文艺","成长","动画","华语","欧美","韩国","日本",""]
	}
	
	componentWillMount(){
		/*promise解决回调地狱*/
		this.hotFilm().then(this.freeFilm.bind(this)).then(this.newFilm.bind(this));	
	}
	
	/*影院热映promise对象*/
	hotFilm(){
		return new Promise((resolve,reject)=>{
			this.loadFilm("https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items","影院热映",resolve);
		});
	}
	
	/*免费在线观影promise对象*/
	freeFilm(){
		return new Promise((resolve,reject)=>{
			this.loadFilm("https://m.douban.com/rexxar/api/v2/subject_collection/movie_free_stream/items","免费在线观影",resolve);
		});
	}
	
	/*新片速递promise对象*/
	newFilm(){
		return new Promise((resolve,reject)=>{
			this.loadFilm("https://m.douban.com/rexxar/api/v2/subject_collection/movie_latest/items","新片速递",resolve);
		});
	}
	
	
	/*加载电影数据*/
	loadFilm(api,title,callback){
		let self = this;
		$.ajax({
			type:"get",
			url:api,
			data:{start:0,count:8},
			dataType:"jsonp",
			success:function(result){
				let obj = {};
				obj.title = title;
				obj.list = result.subject_collection_items;				
				/*如果直接self.setState({FilmArr:self.state.FilmArr.push(obj)})得到的FilmArr为1,因为push()是返回数组的长度*/
				self.setState({FilmArr:self.state.FilmArr.concat(obj)});
				callback? callback():"";
			}
		});
	}
	
	render(){
		return(
			<div className="content">
				<div className="pt10">
					{
						this.state.FilmArr.map((item,idx)=> <RowItem item={item} key={idx}/>)
					}
				</div>
				<div>
					<h2 className="type_title">分类浏览</h2>
					<ul className="clear filmType_wrap">
						{
							this.typeList.map((item,idx)=> 
								<li key={idx} className="fl filmType">
									{item} 
									{idx!=this.typeList.length-1? <span className="arrow"></span>:""}
								</li>
							)
						}
					</ul>
				</div>
			</div>
		)
	}
}

export default Film;