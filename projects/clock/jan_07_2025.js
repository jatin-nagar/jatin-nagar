
function time(){
    let date=new Date();
    document.getElementsByClassName('box2')[0].innerHTML=date.toLocaleTimeString();
     document.querySelector(".day").innerHTML=""+date.getDay();
      document.querySelector(".date").innerHTML=","+date.getDate();
      document.querySelector(".month").innerHTML="/"+date.getMonth()+1;
      document.querySelector(".year").innerHTML="/"+date.getFullYear();
}
setInterval(time,1000);
time()

