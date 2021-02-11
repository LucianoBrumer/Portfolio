window.onscroll = function() {onscroll_function()};

function onscroll_function() {
	let header = document.getElementById("header");
	if(window.scrollY > 0){
		header.style.backgroundColor = "rgba(13, 17, 21," + window.scrollY/200 + ")";
	}else{
		header.style.backgroundColor = "rgba(13, 17, 21, 0)"; 
	}
}


function onmouseover_project_img(element){
	element.style.position = "relative";
	element.style.top = "10px";
}

function onmouseout_project_img(element){
	element.style.position = "block";
	element.style.top = "0px";
}

function onmouseover_text_action(element){
	element.style.color = "rgb(203, 207, 211)";
}

function onmouseout_text_action(element){
	element.style.color = "white";
}


window.onmouseover = function() {onmouseover_function()};

function onmouseover_function() {
	let project_img = document.getElementById("project_img");
	project_img.setAttribute("onmouseover", "onmouseover_project_img(this)");
	project_img.setAttribute("onmouseout", "onmouseout_project_img(this)");
	
	let project_img_2 = document.getElementById("project_img_2");	
	project_img_2.setAttribute("onmouseover", "onmouseover_project_img(this)");
	project_img_2.setAttribute("onmouseout", "onmouseout_project_img(this)");
	
	let text_action = document.getElementsByClassName("text_action");
	for(var i = 0; i < text_action.length; i++) {
		text_action[i].setAttribute("onmouseover", "onmouseover_text_action(this)");
		text_action[i].setAttribute("onmouseout", "onmouseout_text_action(this)");
	}
	
}
