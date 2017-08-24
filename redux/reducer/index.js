const toDos = (state={isLogin:false,isSearch:false},action) => {
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
		case "open_search":
			return Object.assign({},state,{isSearch:true});
			break;
		case "close_search":
			return Object.assign({},state,{isSearch:false});
			break;
		default:
			return state;
	}
}

export default toDos;
