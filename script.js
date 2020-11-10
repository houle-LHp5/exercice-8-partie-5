//const copieButton = document.getElementById("buttonText");

let houleParent = document.getElementById("parentForm");
let houleBtn = document.getElementById("btnTxt");

houleBtn.onclick = houleDuplicate;

function houleDuplicate(){
 let houleNode = document.getElementById("houleNode");
 let houleNodeCopy = houleNode.cloneNode(true);

 houleParent.appendChild(houleNodeCopy);
} 
 