let n = Number(prompt("Please in put n"));
if(n==0){
console.log(`Factorial of ${n} is 0`);   
}
else{
let factorial = 1;
for(i=1;i<=n;i++){
    factorial = factorial * i;
}
console.log(`Factorial of ${n} is ${factorial}`);
}