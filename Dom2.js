"use strict"

let maincontainer=document.createElement("div");
maincontainer.setAttribute("class","Maincontainer");

let container=document.createElement("div");
container.setAttribute("class","container");

let h1content=document.createElement("h1");
h1content.innerText="Click me to change the color";

let threebtn=document.createElement("div");
threebtn.setAttribute("id","ThreeBtn");

let btn1=document.createElement("button");
btn1.setAttribute("id","btn1");
btn1.innerText="Clicked me";

let btn2=document.createElement("button");
btn2.setAttribute("id","btn2");
btn2.innerText="Click me";

let btn3=document.createElement("button");
btn3.setAttribute("id","btn3");
btn3.innerText="Click me";

threebtn.appendChild(btn1);
threebtn.appendChild(btn2);
threebtn.appendChild(btn3);

container.appendChild(h1content);
container.appendChild(threebtn);

maincontainer.appendChild(container);

let body =document.body;

body.appendChild(maincontainer);

let valid=document.querySelectorAll("button");
console.log(valid);
for(let i=0;i<valid.length;i++){
// console.log(valid[i]);
valid[i].addEventListener("click",myFunction);
valid[i].count=0
function myFunction(){
console.log(valid[i].count);
  if(valid[i].count==0){
console.log(valid[i]);
    valid[i].style.backgroundColor="#ee55776b";
    valid[i].style.color="white";
    valid[i].innerText="Clicked";
    
    valid[i].count=1;
  }

else{
  valid[i].style.backgroundColor="";
  valid[i].style.color="";
  valid[i].innerText="Clicke me";
  valid[i].count=0;
}
console.log(valid[i].count);
}




}

// // let btn1=document.getElementById("btn1");
// btn1.addEventListener("click",myFunction);
// btn2.addEventListener("click",myFunction1);
// btn3.addEventListener("click",myFunction2);
// function myFunction(){
    
//   if(btn1){
//     btn1.style.backgroundColor="red";
//     btn1.style.color="white";
  
//   //   // btn1.style.color="yellow";
//   }
  
// }
// function myFunction1(){

//     btn2.style.backgroundColor="red";
//     btn2.style.color="white";
   
//   }

//   function myFunction2(){
//     btn3.style.backgroundColor="red";
//     btn3.style.color="white";
//   }