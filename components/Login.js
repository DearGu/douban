import React,{Component} from "react";
import ReactDOM from "react-dom";
import "../scss/login.scss";
import * as action from "../redux/action/index";
import {connect} from "react-redux";

class Login extends Component{
	handleOpenPsw(){
		const psw_input = $(".password_input");
		/*解决ios光标错位问题*/
		psw_input.blur();
		psw_input.attr("type")=="password" ? 
			(psw_input.attr("type","text"),$(".openpsw").addClass("open")):
			(psw_input.attr("type","password"), $(".openpsw").removeClass("open"));
	}
	
	handelLogin(){
		if(!this.userName.value) return;
		if(!this.psw.value) return;
		this.props.login();
		history.go(-1);
	}
	
	render(){
		return(
			<div>
				<div className="login_title">
					<a href="javascript:history.go(-1);">取消</a>
					登录豆瓣
				</div>
				<div className="form_wrap">
					<div>
						<div>
							<input className="userName_input" type="text" placeholder="邮箱 / 手机号 / 用户名" ref={(input)=> this.userName = input}/>
						</div>
						<div className="relative">
							<input className="password_input" type="password" placeholder="密码" ref={(input)=> this.psw = input}/>
							<span className="openpsw" onTouchEnd={this.handleOpenPsw.bind(this)}></span>
						</div>
						<div className="login_btn" onTouchEnd={this.handelLogin.bind(this)}>
							登录						
						</div>
					</div>
					<p className="more_login_way">使用其他方式登录 & 找回密码</p>
					<div className="btn_wrap">
						<a>注册豆瓣账号</a>
						<a className="ml20">下载豆瓣App</a>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) =>{
	return{
		userStatus:state.IndexReudcer	
	}
}

export default connect(mapStateToProps,action)(Login);