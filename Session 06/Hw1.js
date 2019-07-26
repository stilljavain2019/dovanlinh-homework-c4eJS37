let ahref = document.getElementById('demo-a');
// console.log(ahref);
// console.dir(ahref);
let link = ahref.href;
// console.log(link);
let btn = document.getElementById('btn-demo');
let input = document.getElementById('demo-input');
// console.dir(input);
btn.addEventListener('click',()=>{
input.value=link;
})