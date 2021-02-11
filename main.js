window.onscroll = function() {onscroll_function()};

function onscroll_function() {
	let header = document.getElementById("header");
	console.log(window.scrollY);
	if(window.scrollY > 0){
		header.style.backgroundColor = "rgba(13, 17, 21," + window.scrollY/200 + ")";
	}else{
		header.style.backgroundColor = "rgba(13, 17, 21, 0)"; 
	}
}


function onmouseover_(element){
	element.style.position = "relative";
	element.style.top = "10px";
}

function onmouseout_(element){
	element.style.position = "block";
	element.style.top = "0px";
}

window.onmouseover = function() {onmouseover_function()};

function onmouseover_function() {
	let project_img = document.getElementById("project_img");
	project_img.setAttribute("onmouseover", "onmouseover_(this)");
	project_img.setAttribute("onmouseout", "onmouseout_(this)");
	
	let project_img_2 = document.getElementById("project_img_2");
	project_img_2.setAttribute("onmouseover", "onmouseover_(this)");
	project_img_2.setAttribute("onmouseout", "onmouseout_(this)");
}
