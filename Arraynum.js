let Array = [2, 45, 78, 5, 6, 90, 43, 67, 5, 12, 34, 52, 87, 65, 98, 9, 47, 32, 34, 36, 37];

let countDivisibleByThree = 0;
let countDivisibleByTwo = 0;
let countDivisibleByAnother = 0;
 
let div3=[]
let div2=[]
let rem=[]
let com=[]

for (let i = 0; i < Array.length; i++) {
    if (Array[i] % 3 === 0) {
        div3.push(Array[i])
  
        countDivisibleByThree++;
    } else if (Array[i] % 2 === 0) {

       div2.push(Array[i])
        countDivisibleByTwo++;
    } 
    else {
     
        countDivisibleByAnother++;
   
        rem.push(Array[i])
    }
     if((Array[i] % 2 === 0) &&( Array[i] % 3 ===0)){
       com.push(Array[i])
    }

}

console.log("Total numbers divisible by three:", countDivisibleByThree ,"And elements are",div3);
console.log("Total numbers divisible by two:", countDivisibleByTwo,"Divisible by 2",div2);
console.log("Total numbers divisible by another number:", countDivisibleByAnother,"Another Elements are",rem);
console.log("The number which can be divided by 2 as well as threre;",com)
