var name,age;
function compare(){
	name = document.getElementById("name2").value;

	document.getElementById('nameb').style.opacity = '0';
	document.getElementById('nameb').style.visibility = 'hidden';
	document.getElementById('nameb').style.height = '0px';
	document.getElementById('ageb').style.visibility = "visible";
	document.getElementById('ageb').style.opacity = "1";
	document.getElementById("age2").autofocus;

	}

	function compare2() {
		var a;

		age = document.getElementById("age2").value;
		console.log(name);
		console.log(age);
		document.getElementById("ageb").style.opacity = "0";
		document.getElementById("ageb").style.height = "0px";
		document.getElementById("result").style.opacity = "1";
		if (age == 18) {
			document.getElementById("text").innerHTML = name + " ви повнолітній";
		} else if (age < 18) {
			a = 18 - age;
			console.log(a);
			document.getElementById("text").innerHTML = name + " ви неповнолітній";
			document.getElementById("text2").innerHTML = "До повноліття залишилось " + a + " років";
		} else if (age > 18) {
			a = age - 18;
			document.getElementById("text").innerHTML = name + " ви повнолітній";
			document.getElementById("text2").innerHTML = "Від моменту повноліття пройшло " + a + " років";
		} else {
			document.getElementById("text").innerHTML = "Введена вами інформація некоректна"
		}
	}