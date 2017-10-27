
	var cars={
	info :[ 	
	{ brand: "Toyota",
	  year: "2010",
	  maxSpeed: "200",
	  color : "red"
	},
    	
	{ brand: "Reno",
	  year: "2015", 
	  maxSpeed: "190",
	 color : "green"
	},
     	
	{ brand: "Wolkwagen",
	  year: "2017", 
	  maxSpeed: "300",
	  color : "brown"
	},
     	
	{ brand: "Land Rover",
	  year: "2000",
	  maxSpeed: "320",
	  color : "grey"
	},
    	
	{ brand: "Toyota" ,
	  year: "2015",
	  maxSpeed: "270",
	  color : "orange"
	}
	]
    }
 
var carGlobal= [];
/*------------------WRITE CARS IN LOCAL STORAGE - JSON-----------------*/
function writeCars(){
	myJSON=JSON.stringify(cars);
	localStorage.setItem("myCars",myJSON);
}
window.onload = writeCars;

/*-------------------ADD DATA FROM ARRAY -->CARS.INFO IN DOM--------------------------*/

	
	
	
 
/*----------------OUTPUT CARS INFO---------------------*/	
function carsOut(){
    getCar=localStorage.getItem("myCars");
	cars = JSON.parse(getCar);
	for(var i in cars.info)
	 addBlock(cars.info[i]);
		
	//console.log(cars.info[i]);
	
	for(var j in carGlobal)
	console.log(carGlobal[j]);
}

window.onload = carsOut;


function addBlock(carN) {
	
	var dataCar=[];
	var block=document.createElement('div');
   for(var t in carN)
	   {    
		  // console.log(carN[t]);
		    dataCar = dataCar+carN[t]+"   ";
			block.innerHTML=dataCar;
	       document.getElementById('wrap').appendChild(block);
	   }
	//console.log(dataCar);
	block.className="car";
	carGlobal.push(dataCar);
	
}





function showCars(){
    text = localStorage.getItem("myCars");
    cars = JSON.parse(text);
    console.log(cars);
}
/*----------------MAIN-FUNCTION-------------------------------*/
function main(){
	 
	
	textCars=localStorage.getItem("myCars");
	cars=JSON.parse(textCars);
	addCar(); 
	myJSON=JSON.stringify(cars);
	localStorage.setItem("myCars",myJSON);
    location.reload();
}
/*---------------ADD NEW CAR IN CARS OBJECT------------------------------------*/
function addCar(){
	 var newCar={
		  brand: "",
		  year: "",
		  maxSpeed:"",
		  color:""
		  
	  };
	
    var data=[];  
	a = cars.info.length; //Find length of object 
  	var result = document.getElementById("carInfo").value;  
	data=result.split(', ');

for(var k in newCar)
	{	switch(k)
			{
				case "color":
					newCar[k]=data[3];
					break;
				case "year":
					newCar[k]=data[1];
					break;
				case "maxSpeed":
					newCar[k]=data[2];
					break;
				case "brand":
                    newCar[k]=data[0];				 
					break;
			}
}
	for(var z in data)
	console.log(data[z]);
 
	cars.info[a] =newCar;
}
 
