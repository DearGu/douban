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

export const login = () =>{
	return{
		type:"user_login"
	}
}

export const openSearch = () =>{
	return{
		type:"open_search"
	}
}

export const closeSearch = () =>{
	return{
		type:"close_search"
	}
}
