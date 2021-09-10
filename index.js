let button=document.getElementById('todo_button');
let container=document.getElementById('todocontainer');
let inputField=document.getElementById('input_');
button.addEventListener('click',function(){
    var paragraph=document.createElement('p');
    
    paragraph.innerText= `   •   ` +inputField.value;
    paragraph.classList.add('paragraph-style');
    container.appendChild(paragraph);
});