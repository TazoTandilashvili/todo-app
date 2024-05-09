'use strict'

const textInput = document.getElementById('textInput');
const checkBox = document.getElementById('checkBox');
const todoList = document.getElementById('todoList');//append child

let counter = 0;
let text=''
const itemCount = document.querySelector('.itemCount');

const checkboxStyle = document.querySelector('input[type="checkbox"]#checkBox');

checkBox.addEventListener('click', function(){
  if (checkBox.checked && textInput.value != "" ){

    // create new div
    const newTask = document.createElement('div');
    newTask.classList.add('task');
    text = textInput.value
    newTask.innerHTML = `
    

    <div class="checkBoxDiv">
        <input type="checkbox" class="tasckCheck" onclick="getPValue(this)"> 
      </div>
      <div>
      <p class="taskProperty ">${text}</p>
      </div>
      <div class="remove-task" >
        <img src="./images/icon-cross.svg" alt="icon-cross" class="cross-icon" onclick="removeTask(this)">
    </div>
    `
    todoList.insertBefore(newTask, todoList.lastElementChild);
    // count tasks
    counter++;
    itemCount.innerHTML = `${counter} items left`;
    console.log(counter)


   
    setTimeout(function(){
      checkboxStyle.style.content = '';
      checkBox.checked = false
      textInput.value = "";
    }, 1000)
  } 
  checkboxStyle.style.content = 'url(./images/icon-check.svg)';
 
  
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


//  CLEAR ALL TASKS
const clearButton  = document.querySelector('.clear-completed');
clearButton.addEventListener('click', function() {
  const tasks = document.querySelectorAll('.task');
  
  tasks.forEach(task => {
    task.remove();
  });

  counter = 0;
  itemCount.innerHTML = `${counter} items left`;
});

