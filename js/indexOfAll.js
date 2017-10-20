var name;
var frag;
var masiv = [];

function inputData(){
name = document.getElementById('text-block').value;
 
 if(name!=''){
hideEl('input-block');	

showEl('input-block2');
 }
else {
	hideEl('input-block');
	showEl('result_block');
	addMess();
}
    }
function inputDataFrag(){
frag = document.getElementById('text-block2').value;
 if(frag!=''){
hideEl('input-block2');
showEl('result_block');
showReset();	 
indexOfAll( );}
	else {
		hideEl('input-block2');
		showEl('result_block');
		addMess();
	}
	
    }

function showReset(){
	document.getElementById('res_but').style.opacity = '1';
}
function showEl(param){
 document.getElementById(param).style.opacity = '1';
 document.getElementById(param).style.visibility='visible';
 
}
function hideEl(param){
 document.getElementById(param).style.opacity = '0';
 document.getElementById(param).style.visibility='hidden';
 document.getElementById(param).style.height='0px';	
}
function resetAll(){
	hideEl('result_block');
    window.location.reload();
	 
}

function indexOfAll(){
 console.log(name); console.log(frag);
 var b;
	b=name.indexOf(frag);
	console.log(b);
	if(b==-1){
		addError();
	} else{
 a=0;
	for(i=0;i<name.length;i++)
		{
			a = name.indexOf(frag,i);
			if(a == -1) continue;
		    masiv.push(a);
			a=a+1;
			i=a;
			
		}
	 addResult();
 for(info in masiv)
	 console.log(masiv[info]);
	}
}
/*------------------MESSAGES-------------------------------------------------*/
function addMess(){
	 document.getElementById('result-b').innerHTML="You didn't enter any data!!!";
	document.getElementById('result-b').style.color='red';
}
function addError(){
     document.getElementById('result-b').innerHTML='Fragment not found!!!';
	document.getElementById('result-b').style.color='red';
}
function addResult(){
	 
	 document.getElementById('result-b').innerHTML=masiv;
}