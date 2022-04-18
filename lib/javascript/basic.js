document.write("<style>body{background-size:"+document.documentElement.clientWidth+"px "+document.documentElement.clientHeight+"px"+"}</style>");
var audio = document.getElementByld("audio");
audio.display();

function github(){
	window.location.href = "https://github.com/yuzhouxing-git";
}

function bilibili(){
	window.location.href = "https://space.bilibili.com/553486721";
}

function introduce(){
	document.getElementById('button').style.display = 'none';
	document.getElementById('introduce').style.display = 'block';
}

function back(){
	document.getElementById('button').style.display = 'block';
	document.getElementById('introduce').style.display = 'none';
}