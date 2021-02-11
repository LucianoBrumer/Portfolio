window.onscroll = function() {onscroll_function()};

function onscroll_function() {
	var header = document.getElementById("header");
	console.log(window.scrollY);
	if(window.scrollY > 0){
		header.style.backgroundColor = "rgba(13, 17, 21," + window.scrollY/200 + ")";
	}else{
		header.style.backgroundColor = "rgba(13, 17, 21, 0)"; 
	}
}