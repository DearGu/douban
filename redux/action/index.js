export const picView = (url) => {
	return{
		type:"pic_view",
		url
	}
}

export const closeView = () =>{
	return{
		type:"close_view"
	}
}
