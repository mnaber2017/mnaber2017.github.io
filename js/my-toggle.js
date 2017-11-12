 

var block=document.getElementById('block');
var stat = window.getComputedStyle(block, null).getPropertyValue("display");
//console.log(stat);
var copy=stat; 
var blockh= window.getComputedStyle(block,null).getPropertyValue("height");
blockh=blockh.replace(/px/,'');
var copyh=blockh;
console.log(blockh);
var opstat=window.getComputedStyle(block,null).getPropertyValue("opacity");
//console.log(opstat);



function mys(time) {
blockh=copyh;
	var step=1/time*100;
var n=1/step;
	console.log('N= ',n);
var steph=Math.abs(blockh/n);
	console.log('steph= ',steph);
	console.log('step= ',step);
	if (copy != 'none') {
		console.log('sdsd');
		var myInter = setInterval(function () {
			block.style.height=blockh+'px';
			blockh=blockh-steph;
			console.log(blockh);
			block.style.opacity =opstat;
            opstat-=step;
			
            console.log(opstat);
            if (opstat <=0) {
				clearInterval(myInter);
				opstat=0;
				block.style.opacity =0;
				 
			}
		}, 100);
        
		copy = 'none';
		console.log('===='+opstat);

	} else if(copy=='none') {
		// block.style.display=stat;
		blockh=0;
		copy = stat;
		console.log(opstat);
			var myInter2 = setInterval(function () {
			if (opstat == 1 || opstat>1) {
				clearInterval(myInter2);
				opstat=1;
				
				 
			}
			block.style.opacity =opstat;
            opstat+=step;
				block.style.height=blockh+'px';
			blockh=blockh+steph;
		console.log('steph= ',blockh);


		}, 100);
		
		//console.log(opstat);
	}






} 