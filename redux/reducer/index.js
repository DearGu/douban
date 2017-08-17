const toDos = (state={isLogin:false},action) => {
	switch(action.type){
		case "pic_view":
			return Object.assign({},state,{url:action.url,isShow:true});
			break;
		case "close_view":
			return Object.assign({},state,{isShow:false});
			break;
		case "user_login":
			return Object.assign({},state,{isLogin:true});
			break;
		default:
			return state;
	}
}

export default toDos;
