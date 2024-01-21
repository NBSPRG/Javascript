// DOM manipulation cannot be done using node, It can only be done using browser

// const parent = document.querySelector('.parent');
// console.log(parent)

// // query selector only give the first value;
// // unlinke the query seclector all

// console.log("Nodes : ", parent.childNodes);

// script for DOM-2.html

const div = document.createElement('div');
div.className = "div1";
div.id = Math.round(Math.random() * 10 + 1);
div.setAttribute("title", "title1");    // this is fast operation because, it directly write
//  for the above operation, first we find the refernce for it then overwrite it;

div.style.background = "green"
// div.innerText = "Code and chai";
const addText = document.createTextNode("Code and chai");
div.appendChild(addText);
document.body.appendChild(div);