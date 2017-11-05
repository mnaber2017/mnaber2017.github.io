var name;
var frag;
var masiv = [];
var b =0;
 

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
indexRec( );}
	else {
		hideEl('input-block2');
		showEl('result_block');
		addMess();
	     }
	
}
	
 function indexRec(){
	 var pos=name.indexOf(frag,b);
	   if(pos!=-1)
		 {
			pos = name.indexOf(frag,b);
			masiv.push(pos);
			b=pos+1;
			indexRec();
			 
	        	 
		 }else {
			 if(masiv=='') 
			 {console.log("there is not fragment");
			  }
			 else if(masiv!=undefined)
				 {
					 console.log(masiv);
				 }
		 }
	 addResult();
 };
	
	
/*----------------------------HIDE&SHOW&RESET FORM ELEMENTS--------------------------*/	
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