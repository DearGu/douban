const toDoImage = (state={},action) => {
	switch(action.type){
		case "pic_view":
			return Object.assign({},state,{url:action.url,isShow:true});
			break;
		case "close_view":
			return Object.assign({},state,{isShow:false})
		default:
			return state;
	}
}

export default toDoImage;
