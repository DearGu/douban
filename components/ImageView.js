import React,{Component} from "react";
import ReactDOM from "react-dom";
import * as action from "../redux/action/index.js";
import {connect} from "react-redux";

class ImageView extends Component{
	constructor(props){
		super(props);
		this.state = {isClick:false}
	}
	
	closeImg(){
		this.props.closeView();
		this.setState({isClick:true});
	}
	
	render(){
		return(
			<div className={this.props.imgMsg.IndexReudcer.isShow? "image_view open":this.state.isClick? "image_view close":"image_view"}>
				<span onTouchEnd={this.closeImg.bind(this)}>×</span>
				<img src={this.props.imgMsg.IndexReudcer.url}/>
			</div>
		)
	}
}

const mapStateToProps = (state) =>{
	return{
		imgMsg:state
	}
}

export default connect(mapStateToProps,action)(ImageView);