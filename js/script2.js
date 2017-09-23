function findm(param1)
{   var len, name,n;
    var param1,one,two;
    len= param1.length;
    name=param1.slice(1,len);
   console.log(name);
    two = document.getElementById('out');
    if (param1[0] == '.')
        {   one = document.getElementsByClassName(name);
              n = document.getElementsByClassName(name).length;
         console.log(n);
            console.log('Class');
           console.log(one[0].innerHTML+one[1].innerHTML);
          two.innerHTML = one[0].innerText+'<hr><br> '+one[1].innerHTML;
          one[0].innerHTML='I find it';
          one[1].innerHTML='I find it';
       }
    else if(param1[0] == '#')
        {   one = document.getElementById(name);
            console.log('Id');
            console.log(one.innerHTML);
            two.innerHTML = one.innerText+'<hr><br> ';
          one.innerHTML='I find it';
        }
   

}
//ТРЕБА ДОПИСАТИ ДЛЯ КЛАССІВ ЩОБ РАХУВАЛО КІЛЬКІСТЬ ЕЛЕМЕНТІВ В КОЛЕКЦІЇ
//ПОТІМ БУДЕ ЗАПУСКАТИСЬ ЦИКЛ 
//ДЛЯ АЙДИ ТАК НЕ ВИЙДЕ ПО ДЖС