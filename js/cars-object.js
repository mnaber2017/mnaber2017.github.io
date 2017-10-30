var xmlhttp = new XMLHttpRequest();
var cars;

xmlhttp.onloadend = function() {
    if (this.readyState == 4 && this.status == 200) {
         cars = JSON.parse(this.responseText);
		 
        for(var i in cars.info)
       {   addBlock(cars.info[i],i);
	       
       }
		 
	    
    }
	
	 
 };
xmlhttp.open("GET", "cars.json", true);
xmlhttp.send();
/*
 function writeCars(carsOut){
	cars=JSON.stringify(cars);
	localStorage.setItem("myCars",cars);
   

}*/
 
	var a = 0;
/*--------------------FUNCTION OUTPUT-------------------*/
function showCars(){
  
	document.getElementById("cars").innerHTML="";
	/*cars=localStorage.getItem("myCars");
	cars = JSON.parse(cars);*/
	for(i=0;i<cars.info.length;i++)
  {   
	  addBlock(cars.info[i],i);
	 	
  }
 
}

function addBlock(carN,num) {
	num=+num+1;
	var dataCar=[];
	var block=document.createElement('div');
   for(var t in carN)
	   {    
		     
		    dataCar = dataCar+carN[t]+"  ";
			block.innerHTML=num+' '+dataCar;
	        document.getElementById("cars").appendChild(block);
	   }
	 
	block.className="car";
	 
	
}

 
 
/*--------------------ALGORITHMS------------------------*/
/*--------------------ADD NEW CAR TO OBJECT-------------*/

function addCar(carBrand,carYear,carMaxSpeed,carColor){
	
	var data=[];   
  	var result = document.getElementById("carInfo").value;  
	data=result.split(', ');
	carBrand=data[0];
	carYear=data[1];
	carMaxSpeed=data[2];
	carColor=data[3];
	console.log(data);
	if(carBrand!=undefined &&carYear!=undefined
		   &&carMaxSpeed!=undefined)
			{ 
			  cars.info.push({
		      brand: carBrand,
		      year: carYear,
		      maxSpeed:carMaxSpeed,
		      color: data[3]!=undefined? data[3]:'---' 
			})
		 } else 
			  console.log('you should enter more information(minimum 3 agruments)!!!');
		      console.log(cars.info);
	/*writeCars();*/
	showCars();
	
}
/*--------------------CAR SORTING-----------------------*/
function sortBy(par){
	switch(par){
		case 'brand':
			sortByBrand();
			break;
		case 'year':
			sortYearSpeed(par);
			break;
		case 'maxSpeed':
			sortYearSpeed(par);
			break;
		default:
			console.log("Wrong argument");
			break;
			
	}	
}
/*----------------BRAND SORTING-------------------------*/
function sortByBrand(){
  for(j=0;j<cars.info.length;j++)
   { 
	 max=cars.info[j].brand;
     maxCar=cars.info[j];
     n=j;
	  for(i=j+1;i<cars.info.length;i++)
     {
	    
       if (max>cars.info[i].brand)
	   {   
		 max=cars.info[i].brand;
		 n=i;
		 maxCar=cars.info[n];
	   }  
	   else {
		 max=max; 
	     n=n;
		 maxCar=maxCar;
	      }
	  }
	 cars.info[n]=cars.info[j];
	 cars.info[j]=maxCar;     
   }
	/*writeCars();*/
	showCars();
	document.getElementById('sort').innerHTML="Sorting by brand";
	hideSort();

   console.log(cars.info);	
}
/*----------------YEAR & MAX_SPEED SORTING---------------*/ 
function sortYearSpeed(param){
  for(j=0;j<cars.info.length;j++)
   {  
	 max=cars.info[j][param];
     maxCar=cars.info[j];
     n=j;
	for(i=j+1;i<cars.info.length;i++)
     {
	   if(max>cars.info[i][param])
	    {   
		 maxCar=maxCar;
		 max=max;
		 n=n;
		}  
	    else 
		{
		 max=cars.info[i][param]; 
	     n=i;
		 maxCar=cars.info[n];
	    }
	 }
	  cars.info[n]=cars.info[j];
	  cars.info[j]=maxCar;
	      
    }
	/*writeCars();*/
	showCars();
	document.getElementById('sort').innerHTML="Sorting by "+param;
	hideSort();
	console.log(cars.info); 
} 
/*--------------------------------------------------------*/
 function showSort(){
	 document.getElementById("sorting-list").style.display ='block';
 }
  function hideSort(){
	 document.getElementById("sorting-list").style.display ='none';
 }		  
				  
				  
 
