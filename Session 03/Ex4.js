// let sheepSize = [5,7,300,90,24,50,75];
// //4.1
// console.log(`Hello my name is Linh Do and these are my sheep size
// [${sheepSize}]`);
// //4.2
// let biggest = 1;
// for(i=0;i<sheepSize.length;i++){
//     if(sheepSize[i]>biggest){
//     biggest=sheepSize[i];
//     }
// }
// console.log(`Hello my name is Linh Do and these are my sheep size
// [${sheepSize}]
// Now my biggest sheep has the size of ${biggest}. Let's shear it`);
// //4.3
// indexOfBiggest = sheepSize.indexOf(biggest);
// sheepSize[indexOfBiggest] = 8;
// console.log(`After shearing, here is my flock
// [${sheepSize}]`);
// //4.4
// afterOneMonth = [];
// for(i=0;i<sheepSize.length;i++){
// afterOneMonth.push(sheepSize[i]+50);
// }
// console.log(`One month has passed, here is my flock
// [${afterOneMonth}]`);


// // //4.5
// let sheepSize = [5,7,300,90,24,50,75];
// console.log(`Hello my name is Linh Do and these are my sheep size
// [${sheepSize}]`);
// console.log("_____________________________")
// for(x=0;x<3;x++){
// afterOneMonth = [];
// for(i=0;i<sheepSize.length;i++){
// afterOneMonth.push(sheepSize[i]+50);
// }
// console.log(`Month ${x+1}:
// One month has passed, here is my flock
// [${afterOneMonth}]`);

// let biggest = 1;
// for(i=0;i<afterOneMonth.length;i++){
//     if(afterOneMonth[i]>biggest){
//     biggest=afterOneMonth[i];
//     }
// }
// console.log(`Now my biggest sheep has the size of ${biggest}. Let's shear it`);

// indexOfBiggest = afterOneMonth.indexOf(biggest);
// afterOneMonth[indexOfBiggest] = 8;
// console.log(`After shearing, here is my flock
// [${afterOneMonth}]`);

// sheepSize = afterOneMonth;
// }

4.6
let sheepSize = [5,7,300,90,24,50,75];
console.log(`Hello my name is Linh Do and these are my sheep size
[${sheepSize}]`);
console.log("_____________________________")
for(x=0;x<2;x++){
afterOneMonth = [];
for(i=0;i<sheepSize.length;i++){
afterOneMonth.push(sheepSize[i]+50);
}
console.log(`Month ${x+1}:
One month has passed, here is my flock
[${afterOneMonth}]`);

let biggest = 1;
for(i=0;i<afterOneMonth.length;i++){
    if(afterOneMonth[i]>biggest){
    biggest=afterOneMonth[i];
    }
}
console.log(`Now my biggest sheep has the size of ${biggest}. Let's shear it`);

indexOfBiggest = afterOneMonth.indexOf(biggest);
afterOneMonth[indexOfBiggest] = 8;
console.log(`After shearing, here is my flock
[${afterOneMonth}]`);

sheepSize = afterOneMonth;
}
console.log(`Month 3:
One month has passed, here is my flock
[${sheepSize}]`);
let total =0;
for(let i=0;i<sheepSize.length;i++){
    total = total +sheepSize[i];
}
console.log(`My flock has size in total: ${total}
I would get ${total} * $2 = ${total*2}$`
);