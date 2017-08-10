import React,{Component} from "react";
import ReactDOM from "react-dom";

class BoardCastTemplate extends Component{
	render(){
		let card_content = this.props.content.card
		return(
			<div>
				<div className="clear">
					<img src={this.props.content.author.avatar} className="author_head fl"/>
					<div className="fl">
						<p className="boardcast_author">{this.props.content.author.name} <span>
							{this.props.content.activity? this.props.content.activity:"说"}</span></p>
						<p className="boardcast_time">{this.props.content.create_time}</p>
					</div>
				</div>
				<div className="boardcast_content">
					{
						card_content? (
							<div className="boardcast_card">
								<div className="boardcast_card_titile">{card_content.title}</div>
								<div className="relative">
									<div className={card_content.image? "boardcast_card_content has_cover":"boardcast_card_content"}>{card_content.subtitle}</div>
									{
										card_content.image? (
											<div className="boardcast_card_img" style={{background:`url(${card_content.image.normal.url})no-repeat`,backgroundSize:"cover"}}></div>
										):""
									}
								</div>
							</div>
						):(
							<div className="boardcast_item_content">
								{this.props.content.text.split("https")[0]}
								{
									this.props.content.text.split("https")[1]? <a className="c42bd56" href={this.props.content.sharing_url}>
										https{this.props.content.text.split("https")[1]}</a>:""
								}
								{
									this.props.content.images.length>0? (
										this.props.content.images.length==1? <img src={this.props.content.images[0].normal.url}/>:(
											<div className="img_wrap clear">
												{
													this.props.content.images.map((item,idx)=> <img src={item.normal.url} key={idx}/>)
												}										
											</div>
										)
									):""
								}
							</div>
						)
					}
					<div className="clear info">
						<div className="fl mr20">
							<i className="ic_zan"></i>
							<span>{this.props.content.like_count}</span>
						</div>
						<div className="fl mr20">
							<i className="ic_comment"></i>
							<span>{this.props.content.comments_count}</span>
						</div>
						<div className="fl mr20">
							<i className="ic_retweet"></i>
							<span>{this.props.content.reshares_count}</span>
						</div>
						<div className="fr">
							<i className="ic_more"></i>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default BoardCastTemplate;
