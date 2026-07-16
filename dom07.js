// counter increase on click
let result  =  document.getElementById("counter");
const btn = document.getElementById("btn");

let counter = 0;
btn.addEventListener("click",()=>{
    counter++;
    result.innerText = counter;
    
});
