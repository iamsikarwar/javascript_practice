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
const newArr = [...new set(myarr)];
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
const arrtwo = [];
for(let i=0; i=arrOne.length;i++){

}