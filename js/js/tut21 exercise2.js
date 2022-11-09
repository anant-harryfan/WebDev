console.log('This is tutorial 25')
/*
You have to create a div and inject it into the page which contains a heading.
whenever someone clicks on the div, it should be converted into an editable item. whenever user clicks away (blur). save the note into the local storage.

*/

let divElem = document.createElement('div');
let val = localStorage.getItem('text');
let text;
if(val == null){
    text = document.createTextNode('This is the best website in the world')
}
else{
    text = document.createTextNode(val)
}
divElem.appendChild(text);
divElem.setAttribute('id', 'elem')
divElem.setAttribute('class', 'elem')
divElem.setAttribute('style', 'border:2px solid black; width: 154px; margin: 34px; padding:23px;');

let container = document.querySelector('.container');
let first = document.getElementById('myfirst')



container.insertBefore(divElem, first)

console.log(divElem, container, first);


divElem.addEventListener('click', function () {
    let noTextArea = document.getElementsByClassName('textarea').length;
    if(noTextArea == 0){

        let html =  elem.innerHTML;
        divElem.innerHTML = ` <textarea class="textarea form-control" id="textarea" rows="3"> ${html}</textarea>`;
    }

    let textarea = document.getElementById('textarea')
    textarea.addEventListener('blur', function(){
        elem.innerHTML = textarea.value;
        localStorage.setItem('text', textarea.value);
    })
})

