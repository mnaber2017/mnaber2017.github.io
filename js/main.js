//HOMEWORK VERSION 1
function findm(param1) {
    var len, name, n;
    var param1, one, two;
    len = param1.length;
    name = param1.slice(1, len);
    console.log(name);
    two = document.getElementById('out');
    /*FIND BY CLASSNAME*/
    if (param1[0] == '.') {
        one = document.getElementsByClassName(name);
        n = document.getElementsByClassName(name).length;
        console.log(n);
        for (i = 0; i < n; i++) {
            two.innerHTML += one[i].innerText + '<hr><br> ';
            console.log(one[i].innerHTML);
            one[i].style.backgroundColor="orange"; 
            one[i].innerHTML = 'I find it';
        }


    }
    /*FIND BY ID*/
    else if (param1[0] == '#') {
        one = document.getElementById(name);
        console.log('Id');
        console.log(one.innerHTML);
        two.innerHTML = one.innerText + '<hr><br> ';
        one.innerHTML = 'I find it';
        document.getElementById(name).style.backgroundColor = "orange";
    }


}
// VERSION 2 SHOULD WORK WITH
//findm('#example, .example2, .example');