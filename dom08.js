// random word on click
let text = document.getElementById("counter");
const words = ["apple", "banana", "cherry", "date"];
const btn = document.getElementById("btn").addEventListener("click",()=>{
   const randomIndex = Math.floor(Math.random()*words.length);
   const randomWord = words[randomIndex];
   text.innerText = randomWord
});