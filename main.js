window.onscroll = function() {onscroll_function()};

function onscroll_function() {
	var header = document.getElementById("header");
	console.log(window.scrollY);
	if(window.scrollY > 0){
		header.style.backgroundColor = "rgba(2, 2, 4," + window.scrollY*2/100 + ")";
	}else{
		header.style.backgroundColor = "rgba(2, 2, 4, 0)"; 
	}
}