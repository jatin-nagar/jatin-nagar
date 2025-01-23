let button=document.querySelectorAll('.btn')
console.log(button)
 for(let k=0;k<button.length;k++){
    button[k]. onclick=function(){
        // console.log('button clicked')
        let v=button[k].innerHTML
        console.log(v)
        document.querySelector('#screen').value+=v
    }
}
// solve equation
let solvebtn=document.querySelector('.solve')
solvebtn.onclick=function(){
let equation=document.querySelector('#screen').value
let sol=eval(equation)
document.querySelector('#screen').value=sol
}

let clearbtn=document.querySelector('.clear')
clearbtn.onclick=function(){
document.querySelector('#screen').value=""
}
//  let dotbtn=document.querySelector('.dot')
//  dotbtn.onclick=function(){
//      let equation=document.querySelector('#screen').value
//      let dot=eval(equation) 
//      document.querySelector('#screen').value=''
//  }
let backbtn=document.querySelector('.back')
backbtn.onclick=function(){ 
 document.querySelector('#screen').value=document.querySelector('#screen').value.slice(0, -1);
}