var link=document.getElementById('content');
var n=0;
var dataGlobal=[];
var arrNumber=[];
var arrTitles=[];
/*------------------CHECK COOKIE IF IT IS EMPTY --> DO NOTHING ELSE OUTPUT TABLES------------*/
var status=getCookie();
//console.log(status);

if (status){
	var info=outPut();
		for(let x in dataGlobal)
		{
			arrNumber.push(dataGlobal[x][0].slice(5));
			arrTitles.push(dataGlobal[x][1]);
		}
	//console.log(arrNumber);
/*-------------SAVE NUMBER OF LAST TABLE FOR THE NEXT SESSION------------*/
	var max=arrNumber[0];
	max = Number(max);


for(var i=0;i<arrNumber.length;i++)
	{
		if(Number(arrNumber[i])>=max)
			{
				max=arrNumber[i];
			 
			}  
	}
//console.log('max= ',max);
n=max;
/*-------------SAVE NUMBER OF LAST TABLE FOR THE NEXT SESSION------------*/

	
/*-------------START OUTPUT TABLES-----------------------------------------*/

for(let x in arrTitles)
	{   
		tableOut(arrTitles[x], arrNumber[x]);
		//console.log(n); 
	}
	
	
/*-------------START OUTPUT TABLES-----------------------------------------*/
}
/*------------------CHECK COOKIE IF IT IS EMPTY --> DO NOTHING ELSE OUTPUT TABLES------------*/
/*--------------------OUTPUT TABLES----------------------*/
function outPut(){
	 
	 
	var arr=status.split('; ');
	//console.log(arr);
	for(let x in arr)
		{
			var data=arr[x].split('=');
			dataGlobal.push(data);
		 
		}
	
   
	return dataGlobal; 
}
/*--------------------OUTPUT TABLES----------------------*/
/*---------------CREATER TABLE----------------------------*/
function addTable( ){
    	++n;
	var text=document.getElementById("addT").value;
	setCookie('title'+n,text,1);
	
	 
	/*-----------CREATE NEW TABLE-------------------------*/
	var table = document.createElement('div');
	table.id=n;
	/*-------ADD TABLE NAME-------------------------------*/
	
	var tname=document.createElement('div');
	tname.classList.add("tname");
	tname.innerHTML=text;
	table.appendChild(tname);
	
	
	/*-------ADD TABLE NAME-------------------------------*/
	table.classList.add("mytable");
	link.appendChild(table);
	
	
	/*------------------CREATE NEW TABLE-------------------*/
	/*-----------------DELETE-BUTTON-----------------------*/
	var closeTable=document.createElement('span');
	closeTable.classList.add("closeTable");
	closeTable.id='t'+n;
	closeTable.innerHTML='&times;';
	/*-------------------DELETE-BUTTON--------------------*/
	 
	
    /*-----------------CREATE ADD BUTTON FOR CARDS------------*/
	/* var addCard=document.createElement('p');
	 addCard.innerHTML="Додати картку";
	addCard.id="card"+n;
	addCard.classList.add('addCard');
	 table.appendChild(addCard);*/
	
	
	/*-----------------CREATE ADD BUTTON FOR CARDS------------*/
     table.appendChild(closeTable);
}
/*---------------CREATER TABLE----------------------------*/ 


function getCookie(){
	var cook=decodeURIComponent(document.cookie);
	return cook;
}


/*---------------------SET COOKIE----------------------------*/
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
/*---------------------SET COOKIE----------------------------*/

/*---------------------OUTPUT CARS --------------------------*/
function tableOut(title,numb){
	 
	

	/*-----------CREATE NEW TABLE-------------------------*/
	var table = document.createElement('div');
	table.id=Number(numb);
	/*-------ADD TABLE NAME-------------------------------*/
	
	var tname=document.createElement('div');
	tname.classList.add("tname");
	tname.innerHTML=title;
	table.appendChild(tname);
	
	
	/*-------ADD TABLE NAME-------------------------------*/
	table.classList.add("mytable");
	link.appendChild(table);
	
	
	/*------------------CREATE NEW TABLE-------------------*/
	/*-----------------DELETE-BUTTON-----------------------*/
	var closeTable=document.createElement('span');
	closeTable.classList.add("closeTable");
	closeTable.id='t'+Number(numb);
	closeTable.innerHTML='&times;';
	/*-------------------DELETE-BUTTON--------------------*/
	/*---------------DELETE TABLE-------------------------*/
	closeTable.onclick=function()
	{
		
	
		link.removeChild(table);
		for(let x in arrTitles)
			{
			if(arrTitles[x]==title)
			{   
			    //console.log('number=',Number(numb))
			 
			  
				setCookie('title'+(Number(numb)),'',0);
				 
			}
			}
	}
	/*---------------DELETE TABLE--------------------------*/
	
    /*-----------------CREATE ADD BUTTON FOR CARDS------------*/
	 /*var addCard=document.createElement('p');
	 addCard.innerHTML="Додати картку";
	addCard.id="card"+Number(numb);
	addCard.classList.add('addCard');
	 table.appendChild(addCard);*/
	
	
	/*-----------------CREATE ADD BUTTON FOR CARDS------------*/
     table.appendChild(closeTable);
	/*---------------------------CREATE TABLE------------------*/
	
}

 