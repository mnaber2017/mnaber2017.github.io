var name, age;
function addBlock() {
	var block=document.createElement('div');
	 block.className="inner";
	 block.style.opacity="1";
	 block.innerHTML='Some content';
     document.getElementById("result").appendChild(block);
}
 /*--------------CHECK-NAME------------------*/
function compare() {
	name = document.getElementById("name2").value;
 
	switch(true){
		case name!=''  && isFinite(name)!=true:
			animationBlock1();
			break;
				
	 
		case isFinite(name)==true || name==undefined :
		 animationBlock3();
		 document.getElementById("text").innerHTML = "Введена вами інформація некоректна"
	     break;
}
}
/*--------------------------------------------*/

function animationBlock1() {
    hideEl('nameb');
	showEl('ageb');
	document.getElementById("age2").autofocus;
}

function animationBlock2() {
	hideEl('ageb');
	showEl('result');
}
function animationBlock3 () {
	hideEl('nameb');
	hideEl('ageb');
	showEl('result');
}
/*------------HIDE-AND-SHOW-BLOCK---------*/
function hideEl(name)
{   document.getElementById(name).style.opacity = '0';
	document.getElementById(name).style.visibility = 'hidden';
    document.getElementById(name).style.height = '0px';
}
function showEl(nameEl)
{   
	document.getElementById(nameEl).style.opacity = '1';
    document.getElementById(nameEl).style.visibility = ' visible';
}
/*-----------------------------------------*/


/*-----------------LOGICAL-OPERATIONS--------------------*/
function compare2() {
	var a;

	age = document.getElementById("age2").value;
    animationBlock2();
    switch(true){
		case age == 18:
		document.getElementById("text").innerHTML = name + " ви повнолітній";
		addBlock();
		break;
		
		
		case age < 18 && age >= 0:
		a = 18 - age;
		document.getElementById("text").innerHTML = name + " ви неповнолітній";
		document.getElementById("text2").innerHTML = "До повноліття залишилось " + a + " років";
	    break;
			
		case age > 18:
		a = age - 18;
		document.getElementById("text").innerHTML = name + " ви повнолітній";
		document.getElementById("text2").innerHTML = "Від моменту повноліття пройшло " + a + " років";
		addBlock();
		break;
		
		
		
		case age < 0:
		document.getElementById("text").innerHTML = name + " введена інформація некоректна";
		break;

		default:
		document.getElementById("text").innerHTML = "Введена вами інформація некоректна"
	    break;
}
}