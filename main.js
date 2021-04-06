let addtobutton = document.getElementById('btn');
let tododcontainer = document.getElementById('todoscontainer')
let inputfield = document.getElementById('gottado');

addtobutton.addEventListener('click',function() {
    var paragraph = document.createElement('p')
    paragraph.innerText =gottado.value;
    paragraph.classList.add('paragraph-styling');
    inputfield.value="";
    tododcontainer.appendChild(paragraph);
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration="line-through";
    })
    paragraph.addEventListener('dblclick',function(){
        tododcontainer.removeChild(paragraph);
    })

} )