'use strict'

const textInput = document.getElementById('textInput');
const checkBox = document.getElementById('checkBox');

let text = ''
checkBox.addEventListener('click', function(){
  if (checkBox.checked){
    const task = document.querySelector('.taskProperty');
    text = textInput.value;
    task.textContent = text;
    console.log(task.textContent);
    console.log(text)
    console.log('daemata')
  } 
  
});