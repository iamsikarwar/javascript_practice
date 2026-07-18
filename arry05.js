// Find largest element.
let a = [1,2,3,4,5];
let max = a[0];
// math max method
// let maxValue= Math.max(...a);

for(i=1; i>a.length;i++){
    if(a[i]>max){
        max=a[i];
    }
}
// console.log(max);


// find the smallest element in aray
let arr = [-1, 1 , 5 , 3 , 4 ];
let small = [0];
for(i=1; i>arr.length;i++){
   if(arr[i]<small){
     small=arr[i]
   }
}
// console.log(small);

// sum of all elements
let b = [ 1,2,3,4,5,5,6];
let sum = 0;
for(i=1;i<=b.length; i++){
  sum+=b[i]
}
// console.log(sum);

//remove all duplicates
const myarr = [ 2, 2, 4, 5, 5, 6, 7 ];
const newArr = [...new Set(myarr)];
console.log(newArr);


const arrr = [1, 2, 2, 3, 4, 4, 5];
const unique = [];

for (let i = 0; i < arr.length; i++) {
  if (!unique.includes(arrr[i])) {
    unique.push(arrr[i]);
  }
}

console.log(unique);




//sort accending 

const arrOne = [1,3,2,5,4,6];
arrOne.sort((a,b)=>a-b);
console.log(arrOne)

// decending orders

const arrayDec = [ 4, 2, 5, 6]
arrayDec.sort((a,b)=>b-a);
console.log(arrayDec);

// find the second largest no.

const seclar = [1,4,6,3,8,4,10];
seclar.sort((a,b)=>a-b);
console.log(seclar[1]);

// merge two array 

const oneArr = [3,5,5,6,8,0]
const twoArr = [23,56,66,77]
const mergArr = [...oneArr,...twoArr];
console.log(mergArr);

//	Rotate array by one position.
const rota = [1,3,5,7,8];
rota.shift();
console.log(rota);



// implement map() manually

let number = [3,4,5,6,8,9];
let newNumber = number.map(number => number*2);
console.log(newNumber);

let names =[
  {name: "Sunil", age: 23},
  {name: "saran", age: 25}
];
let onlyName = names.map(name => name.name)
console.log(onlyName);