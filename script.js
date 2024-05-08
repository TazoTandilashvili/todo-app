'use strict'

const textInput = document.getElementById('textInput');
const checkBox = document.getElementById('checkBox');
const todoList = document.getElementById('todoList');//append child

let counter = 0;
let text=''
const itemCount = document.querySelector('.itemCount');

checkBox.addEventListener('click', function(){
<<<<<<< HEAD
  if (checkBox.checked && textInput != "" ){

    // create new div
    const newTask = document.createElement('div');
    newTask.classList.add('task');
    text = textInput.value
    newTask.innerHTML = `
    

    <div class="checkBoxDiv">
        <input type="checkbox" class="tasckCheck" onclick="getPValue(this)"> 
      </div>
      <p class="taskProperty ">${text}</p>
      <div class="remove-task" >
        <img src="./images/icon-cross.svg" alt="icon-cross" class="cross-icon" onclick="removeTask(this)">
    </div>
    `
    todoList.insertBefore(newTask, todoList.lastElementChild);
    // count tasks
=======
  if (checkBox.checked){
    const task = document.querySelector('.taskProperty');
    text = textInput.value;
    task.textContent = text;
    console.log(task.textContent);
    console.log(text)
    
  } 
>>>>>>> e72e2f8e4f2ec0e1469248636eb0ce5814826d89
  
    counter++;
    itemCount.innerHTML = `${counter} items left`;
    console.log(counter)
  } 

 
  
})


const taskProperty = document.querySelector('.taskProperty')
function getPValue(inputElement){
  const taskPropertyValue = inputElement.parentNode.parentNode.querySelector('.taskProperty');
  taskPropertyValue.classList.toggle('doneTask')
  if(taskPropertyValue.classList.contains('doneTask') & counter !=0 ){
    counter = counter - 1;
    itemCount.innerHTML = `${counter} items left`;
  }else{
    counter = counter + 1;
    itemCount.innerHTML = `${counter} items left`;
  }
}
function removeTask(iconElement) {
  const taskElement = iconElement.closest('.task');
  taskElement.remove();
  counter--;
  itemCount.innerHTML = `${counter} items left`;
}

