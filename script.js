'use strict'

const textInput = document.getElementById('textInput');
const checkBox = document.getElementById('checkBox');

let text = ''
checkBox.addEventListener('click', function(){
  if (checkBox.checked){
    text = textInput.value;
    console.log(text)
  } 
  
});