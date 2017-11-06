 
var n=0;
var video;
 var w=0;
var step;
window.onload=done;

function done(){
  video = document.getElementsByTagName('video');
  step=500/video.length;

   for(i=0;i<video.length;i++)
   { 
	   w+=step;
       videoDone();
   }
}

function videoDone()
{ n+=1;
  var stat=(100/video.length)*n;
  document.getElementById('status').innerHTML ='Loading '+stat+" %";
  document.getElementById('status_bar').style.width=w+'px';
   setInterval(function(){ if(n==video.length){
		document.getElementById("preloader").style.opacity='0';
		document.getElementById("preloader").style.zIndex='0';
	    document.getElementById('status_bar').style.display= none;
		stat.innerHTML='';
	}},700);

}

