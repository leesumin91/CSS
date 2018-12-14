function myFunction(){
	var input, filter, ul, li, a, i;

	input = document.getElementById("mySearch");
	filter = input.value.toUpperCase();
	ul = document.getElementById("myMenu");
	li = ul.getElementsByTagName("li");
	console.log(filter);
	/*
		indexOf 는 문자열에서 원하는 문자열을 검색하여 찾거나 아니면 배열에서 원하는 특정 배열값의 존재여부 등을 확인할 수 있다.
		indexOf 는 값을 찾고 그 결과로 숫자를 반환하는데 없는 경우 -1을 반환한다.
		값이 존재하는 경우 그 결과값으로 문자열의 시작위치에 해당하는 index를 반환한다.
	*/
	for(i=0;i<li.length;i++){
		a = li[i].getElementsByTagName("a")[0];
		console.log(a.innerHTML.toUpperCase().indexOf(filter));

		if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
			li[i].style.display = "";
		} else {
			li[i].style.display = "none";
		}
	}
}