var name;
var frag;
var masiv = [];
var b =0;
name=prompt("IndexOffAll Input","Enter the text");
frag=prompt("IndexOffAll Input","Enter the fragment");
 
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
	 
 };