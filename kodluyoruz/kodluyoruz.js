
let myName = document.getElementById('myName');
    myName = prompt("Adınız Nedir?");

if (myName!= null) {
      document.getElementById("myName").innerHTML =
      myName 
}

    function showTime() {
       var date = new Date();
       var hou = date.getHours();
       var min = date.getMinutes();
       var sec = date.getSeconds();
       var session = date.getDay();
     
       if (session == 1) {
         session = "Pazartesi";
       } else if (session == 2) {
         session = "Salı";
       } else if (session == 3) {
         session = "Çarşamba";
       } else if (session == 4) {
         session = "Perşembe";
       } else if (session == 5) {
         session = "Cuma";
       } else if (session == 6) {
         session = "Cumartesi";
       } else if (session == 7) {
         session = "Pazar";
       }
     
       hou = hou < 10 ? "0" + hou : hou;
       min = min < 10 ? "0" + min : min;
       sec = sec < 10 ? "0" + sec : sec;
     
       var time = hou + ":" + min + ":" + sec + " " + session;
       document.getElementById("myClock").innerHTML = time;
       setTimeout(showTime, 1000);
     }
     
     
     
     showTime();




