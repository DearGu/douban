import React,{Component} from "react";
import ReactDOM from "react-dom";
import DownLoad from "../DownLoad";
import RowItem from "../RowItem";

class Book extends Component{
	constructor(props){
		super(props);
		this.state = {BookArr:[]};
		this.typeList = ["小说","爱情","历史","外国文学","青春","励志","随笔","传记","推理","旅行","奇幻","经管"];
		this.window_height = 0;
	}
	
	componentWillMount(){
		/*promise解决回调地狱*/
		this.fictionBook().then(this.NofictionBook.bind(this)).then(this.BookShop.bind(this));	
		this.window_height = $(window).height() - 47;
	}
	
	/*虚构类图书promise对象*/
	fictionBook(){
		return new Promise((resolve,reject)=>{
			this.loadBook("https://m.douban.com/rexxar/api/v2/subject_collection/book_fiction/items","最受关注图书｜虚构类",resolve,"rating");
		});
	}
	
	/*非虚构类promise对象*/
	NofictionBook(){
		return new Promise((resolve,reject)=>{
			this.loadBook("https://m.douban.com/rexxar/api/v2/subject_collection/book_nonfiction/items","最受关注图书｜非虚构类",resolve,"rating");
		});
	}
	
	/*豆瓣书店promise对象*/
	BookShop(){
		return new Promise((resolve,reject)=>{
			this.loadBook("https://m.douban.com/rexxar/api/v2/subject_collection/market_product_book_mobile_web/items","豆瓣书店",resolve,"price");
		});
	}
	
	
	/*加载图书数据(tpye：判断是显示评分还是价格)*/
	loadBook(api,title,callback,type){
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
				obj.type = type;
				result.header? obj.header = result.header:"";
				/*如果直接self.setState({FilmArr:self.state.FilmArr.push(obj)})得到的FilmArr为1,因为push()是返回数组的长度*/
				self.setState({BookArr:self.state.BookArr.concat(obj)});
				callback? callback():"";
			}
		});
	}
	
	render(){
		return(
			<div className="content" style={{height:this.window_height}}>
				<div className="content_wrap">
					<div className="pt10">
						{
							this.state.BookArr.map((item,idx)=> <RowItem item={item} key={idx} cardType={item.type}/>)
						}
					</div>
					<div>
						<h2 className="type_title">分类浏览</h2>
						<ul className="clear filmType_wrap">
							{
								this.typeList.map((item,idx)=> 
									<li key={idx} className="fl filmType">
										{item} 
										{item!=""? <span className="arrow"></span>:""}
									</li>
								)
							}
						</ul>
					</div>
					<DownLoad msg="我们的精神角落"/>
				</div>
			</div>
		)
	}
}

export default Book;