// Conditionals problems
//1.Eligible to Vote
let age = 10;
if(age<18){
    console.log("You are not eligible for vote")
};

//2.Pass or Fail
let marks = 35;
if(marks<50){
    console.log("you are failed the subject");

}else{
    console.log("you passed the subject");
    
};

//3. Greater Number
let numOne = 10; // chnage num value and try
let numTwo = 20;
if(numOne>numTwo){
    console.log("numonw is greater that numtwo");

}else{
    console.log("numtwo is greater");
}
//4. Divisible by 5
let x = 50; // try different numbers
if(x%5===0){
    console.log("x is divisible by 5 ")
}
//5. login check

let correctUsername = "sunil"
let correctPassword = 1212;

let username = prompt("enter your username");
let password = prompt("enter your password");
if(username === correctUsername && password === correctPassword ){
    console.log("You are login successfully")
}else{
    console.log("invalid login details")
};

