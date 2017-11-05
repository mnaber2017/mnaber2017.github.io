var xmlhttp = new XMLHttpRequest();
var item, href, topic;
var sidebar = [];
var template = '<li><a href="#" onclick="clearUrl()">Item</a><ul>##</ul></li>';
var template_sub = '<li><a href="#">Item</a></li>';
var sidebar_sub = [];
xmlhttp.onloadend = function () {
	if (this.readyState == 4 && this.status == 200) {
		nav = JSON.parse(this.responseText);
		for (let i in nav) {
			topic = i;
			a = template.replace(/item/ig, topic);
			sidebar += a;

			for (let j in nav[topic]) {
				item = nav[topic][j]['title'];
				link = nav[topic][j]['href'];
				//console.log(item);
				//console.log(link);
				b = template_sub.replace(/#/g, link);
				b = b.replace(/item/ig, item);
				sidebar_sub += b;
 
			}
			var m;
			c = sidebar.replace(/##/i, sidebar_sub);
			m += c;
			//console.log(c);
			if (m.search(/'undefined'/g)) {
				m = m.replace(/undefined/g, '');
				document.querySelectorAll('#sidebar  >#myNav')[0].innerHTML = m;

			}
			sidebar_sub = '';
			sidebar = '';

		}

	}
};
xmlhttp.open("GET", "json/navbar.json", true);
xmlhttp.send();
(function pageName(){
	var name=window.location.search;
	var nameWork;
	nameWork=name.substring(10,name.length);
	 	
	if(name)
	{   
		window.document.getElementById('title').innerHTML=nameWork;
	   
	}
	
	
	
})();
 function clearUrl(){
	 $(this).css.display="block";
	 
	 
	 
 }



