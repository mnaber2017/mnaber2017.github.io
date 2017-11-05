/*****************
*****START********
*****************/
(function checkData() {
	var arr = [];
	var difference;
 
	if (localStorage.getItem("information")) {
		i = getData();
		j = putData();
		
		for (let t in i)
			if (i[t] != j[t])
				switch (t) {
					case 'screen_w':
						arr += "Window width has been changed<br>it was "+i[t]+" last time<br>";
						break;
					case 'screen_h':
						arr += "Window height has been changed<br> it was"+i[t]+" last time<br>";
						break;
					case 'version':
						arr += "Browser version has been changed"
						break;

				}
		if (arr == '') arr = "Nothing has been changed<br>";
	} else {


		putData();
		getData();
	}; /*-----------------FORMAT DATE----------------------*/
	difference = (j.time - i.time) / 1000;
	console.log(difference + 's');
	
	arr += 'You were here ' + Math.floor(difference) + 's ago';
	if (arr){ 
	   document.querySelectorAll('#content')[0].innerHTML='<div id="diff"></div>';
	}
	document.getElementById('diff').innerHTML = arr;



})();


function putData() {
	var info = {
		screen_w: window.innerWidth,
		screen_h: window.innerHeight,
		version: window.navigator.appVersion,
		time: (new Date()).getTime()
	}
	data = JSON.stringify(info);
	localStorage.setItem("information", data);
	document.getElementById('result').innerHTML="Screen size is w:"+info.screen_w+" h:"+info.screen_h+'<br>'+info.version;
	return info;

}

 function getData() {

 	data = localStorage.getItem("information");
 	data = JSON.parse(data);
 	return data;

 }