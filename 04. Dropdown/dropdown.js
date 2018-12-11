var dropbtn = document.getElementsByClassName("dropbtn");

dropbtn[0].onclick = function(){

	var dropcontent = document.getElementsByClassName("dropdown-content");
	
	dropcontent[0].classList.toggle("block");
}

var dropcontent_item = document.getElementsByClassName("dropdown-content-item");

for(var i=0;i<dropcontent_item.length;i++){
	dropcontent_item[i].onclick = function(){

		var dropcontent = document.getElementsByClassName("dropdown-content");

		dropcontent[0].classList.toggle("block");
	}
}