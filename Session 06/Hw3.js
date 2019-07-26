let table = document.getElementById('table1');
console.log(table);
console.dir(table);
let row = Number(document.getElementById("row").value) -1; 
let column = Number(document.getElementById("column").value)-1; 
let content = document.getElementById("content").value; 
let table = document.getElementById("list");
table.children[0].children[column].children[row].innerHTML = content;