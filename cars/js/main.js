var url = "https://mnaber2017.github.io/json/cars.json";
var xhttp = new XMLHttpRequest();
var cars;
var currentBrand;
var myCars=[];
var carColor=[];
var select = document.getElementById('cars');
var models = document.getElementById('models');
var colors = document.getElementById('carColor');
var contentLink = document.getElementById('content');
var demo = document.getElementById('demo');
     xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var a=this.responseText;
			cars=JSON.parse(a); 
			for(let x in cars.info){
			 if(myCars.indexOf(cars.info[x]["brand"]) == -1)
				 {
			 var opt = document.createElement('option');
			 opt.value=cars.info[x]["brand"];
			 opt.innerHTML=cars.info[x]["brand"];
			 
			 select.appendChild(opt);
			 myCars.push(opt.value);
				 }
					 
			}
							 
/*--------------------OUTPUTCARS----------------------------------*/

			outPut();				
 }
};
    xhttp.open("GET", url, true);
    xhttp.send();
/*----------------SHOW-MODELS-AND-COLOR---------------------------*/
 function showModelsColor(val){
	// console.log(val);
	 contentLink.innerText='';
	 models.style.display="block";
	 colors.style.display="block";
	 models.id="models";
	 models.innerText="";
	 var mod=document.createElement('option');
	 mod.innerText="Select model:";
	 mod.value="";
	 models.appendChild(mod);
     colors.innerText="";
	 var col=document.createElement('option');
	 col.innerText="Select color:";
	 colors.appendChild(col);
	 if (val =="")
		 {
			 outPut();
  /*---------------------IF VALUE IN FIRST SELECT ISN'T ''---------------------*/
		 } else{
			 currentBrand=val;
			 
	 for(let i in cars.info)
		 { 
			 if(cars.info[i]["brand"]==val )
		 {   
			 var optMod = document.createElement('option');
		     optMod.value = cars.info[i]["model"];
		     optMod.innerHTML = cars.info[i]["model"];
		     models.appendChild(optMod);
		     var optColor=document.createElement('option');
		     optColor.value=cars.info[i]["color"];
		     optColor.innerHTML=cars.info[i]["color"];
		     colors.appendChild(optColor);
		     carColor.push(carColor.value);
		 }
		 }
for(let i in cars.info)
  { 
	if(cars.info[i]["brand"]==val )
		 { 
  /*--------CREATE BLOCK---------------*/
	var block=document.createElement('div');
	block.classList.add("carN");
	 block.style.height="auto";
	contentLink.appendChild(block);
  
  /*--------CREATE-BLOCK---------------*/
  /*----------------BLOCK-TITLE----------------*/
  var title=document.createElement('p');
  title.innerText=cars.info[i]["brand"]+' '+cars.info[i]["model"];
  title.classList.add("titleCar");
  block.appendChild(title);
  /*----------------BLOCK-TITLE----------------*/
  /*----------------BLOCK-DESCRIPTION-----------*/
  var description=document.createElement('div');
  description.classList.add("description");
  description.innerText=cars.info[i]["description"];
  block.appendChild(description);
  /*----------------BLOCK-DESCRIPTION-----------*/
  /*----------------BLOCK-IMAGES----------------*/
  var imgCar=document.createElement('img');
  imgCar.src=cars.info[i]["img"];
  imgCar.classList.add("imgCar");
  block.appendChild(imgCar);
  /*----------------BLOCK-IMAGES----------------*/
	 
	 
		 }
	}
		 }
 
	 
 }
 /*-----------------------*/
function showModel(model){
	if(model==""){
	
	}else
		{
	for(let j in cars.info)
	{if(cars.info[j]["model"]==model)
	{contentLink.innerText='';
   /*--------CREATE BLOCK---------------*/
	var block=document.createElement('div');
	block.classList.add("carN");
	 block.style.height="auto";
	contentLink.appendChild(block);
  
  /*-----------------------------------*/
	    /*----------------BLOCK-TITLE----------------*/
  var title=document.createElement('p');
  title.innerText=cars.info[j]["brand"]+' '+cars.info[j]["model"];
  title.classList.add("titleCar");
  block.appendChild(title);
  /*----------------BLOCK-TITLE----------------*/
  /*----------------BLOCK-DESCRIPTION-----------*/
  var description=document.createElement('div');
  description.classList.add("description");
  description.innerText=cars.info[j]["description"];
  block.appendChild(description);
  /*----------------BLOCK-DESCRIPTION-----------*/
	   /*----------------BLOCK-IMAGES----------------*/
  var imgCar=document.createElement('img');
  imgCar.src=cars.info[j]["img"];
  imgCar.classList.add("imgCar");
  block.appendChild(imgCar);
  
  /*----------------BLOCK-IMAGES----------------*/
	}
  	}
		}
}	


function showColor(carColor)
{
	for(let j in cars.info)
	{
	  if(cars.info[j]["color"]==carColor && cars.info[j]["brand"]==currentBrand)
	  {console.log('yes');
	   contentLink.innerText='';
		/*--------CREATE BLOCK---------------*/
	var block=document.createElement('div');
	block.classList.add("carN");
	 block.style.height="auto";
	contentLink.appendChild(block);
  
  /*-----------------------------------*/
	    /*----------------BLOCK-TITLE----------------*/
  var title=document.createElement('p');
  title.innerText=cars.info[j]["brand"]+' '+cars.info[j]["model"];
  title.classList.add("titleCar");
  block.appendChild(title);
  /*----------------BLOCK-TITLE----------------*/
  /*----------------BLOCK-DESCRIPTION-----------*/
  var description=document.createElement('div');
  description.classList.add("description");
  description.innerText=cars.info[j]["description"];
  block.appendChild(description);
  /*----------------BLOCK-DESCRIPTION-----------*/
	   /*----------------BLOCK-IMAGES----------------*/
  var imgCar=document.createElement('img');
  imgCar.src=cars.info[j]["img"];
  imgCar.classList.add("imgCar");
  block.appendChild(imgCar);
  
  /*----------------BLOCK-IMAGES----------------*/
	}
	}
	
}
/*------------------CARS-OUTPUT-----------------*/
function outPut(){
for(let i in cars.info)
 {// console.log(i);
  /*--------CREATE BLOCK---------------*/
	var block=document.createElement('div');
	block.classList.add("carN");
	 block.style.height="auto";
	contentLink.appendChild(block);
  
  /*-----------------------------------*/
    /*----------------BLOCK-TITLE----------------*/
  var title=document.createElement('p');
  title.innerText=cars.info[i]["brand"]+' '+cars.info[i]["model"];
  title.classList.add("titleCar");
  block.appendChild(title);
  
  
  
  /*----------------BLOCK-TITLE----------------*/
 /*----------------BLOCK-DESCRIPTION-----------*/
  var description=document.createElement('div');
  description.classList.add("description");
  description.innerText=cars.info[i]["description"];
  block.appendChild(description);
  /*----------------BLOCK-DESCRIPTION-----------*/
  /*----------------BLOCK-IMAGES----------------*/
  var imgCar=document.createElement('img');
  imgCar.src=cars.info[i]["img"];
  imgCar.classList.add("imgCar");
  block.appendChild(imgCar);
  
  /*----------------BLOCK-IMAGES----------------*/

 }
}