function setCookie(name,value){
	let days = 30;
	let date = new Date();
	date.setTime(date.getTime()+(days*24*60*60*1000));
	document.cookie = name + "=" + escape(value) + ";expires=" + date.toGMTString();
}

function getCookie(name){
	let arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
	if (arr != null)return unescape(arr[2]); return null;
}

function delCookie(name){
	let date = new Date();
	date.setTime(date.getTime()-1);
	let cval = getCookie(name);
	if (cval != null) document.cookie = name + "=" + cval + ";expires=" + date.toGMTString();
}