function calc(){

    var n1= parseInt(document.getElementById("n1").value);
    var n2= parseInt(document.getElementById("n2").value);
    var operation = document.getElementById("operators").value;

    if(operation === '+'){
         document.getElementById("resultat").value = n1 + n2;
    }
    if(operation === '-'){
         document.getElementById("resultat").value = n1 - n2;
    }
    if(operation === '*'){
         document.getElementById("resultat").value = n1 * n2;
    }
    if(operation === '/'){
         document.getElementById("resultat").value = n1 / n2;
    }


   }
