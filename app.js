
const numbers = [
    19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
  ];
  let prime=[];
  
  function primeArray(numbers){
    
    for(let i=0;i<numbers.length;i++){
        if(numbers[i]%2!==0){
            prime.push(numbers[i]);
        }
    }
return prime;
  }
    let result=(primeArray(numbers));
  console.log(result);


function maxMin(prime){
    let max=prime[0];
    let min=prime[0];
    for(let i=1;i<prime.length;i++){
    if(prime[i]>max){
        max=prime[i];
    }
    if(prime[i]<min){
        min=prime[i];
    }
   
    }
    return {max,min};
}

console.log(maxMin(result))

let sum=0;
function Add(arr){
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
console.log(Add(result));