let list = document.getElementById('demo-slt');
// console.dir(list);
// console.log(list.children.length);

document.getElementById('btn-remove').addEventListener('click',()=>{
for(let i = 0;i<list.childElementCount;i++){
    if(list[i].value===list.value){
        list[i].remove();
    }
}
})