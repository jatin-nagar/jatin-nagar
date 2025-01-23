 function dice(){
    let player1=Math.trunc(Math.random()*6)+1
    let player2=Math.trunc(Math.random()*6)+1
    let result=document.querySelector("#winner");
     document.querySelector("#player1").src= "images/image" + player1 + ".webp";
     document.querySelector("#player2").src= "images/image" + player2 + ".webp";
   
    if(player1>player2){
       result.innerHTML="player 1 win!";
    }
    else if(player1==player2){
        result.innerHTML="tie match!"; 
    } 
    else{
        result.innerHTML="player 2 win!" ;
    }
}
    document.querySelector("#roll").addEventListener("click", dice);
