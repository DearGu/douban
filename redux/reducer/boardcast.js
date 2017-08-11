const toDoReportBtn = (state = {isShow:false},action) =>{
	switch(action.type){
		case "change_status":
			return Object.assign({},state,{isShow:!state.isShow});
			break;
		case "keep_status":
			return Object.assign({},state,{isShow:false});
			break;
		default:
			return state;
	}
}

export default toDoReportBtn;
