
let customerCart = ["apple", "banana", "apple", "orange", "banana", "grape"];

let uni=new Set();
let cl=[];
for(i=0;i<=customerCart.length;i++){
  let item=customerCart[i]
  if(!uni.has(item)){
  uni.add(item)
  cl.push(item)
  }
        
    };
    console.log(cl)

    
    

