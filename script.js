'use strict'

const textInput = document.getElementById('textInput');
const checkBox = document.getElementById('checkBox');
const todoList = document.getElementById('todoList');//append child

let counter = 0;
let text=''
const checkboxStyle = document.querySelector('input[type="checkbox"]#checkBox');

checkBox.addEventListener('click', function(){
  if (checkBox.checked && textInput.value != "" ){

    // create new div
    const newTask = document.createElement('div');
    newTask.classList.add('task');
    text = textInput.value;
    newTask.innerHTML = `
    <div class="checkBoxDiv">
        <input type="checkbox" class="tasckCheck" onclick="getPValue(this)"> 
      </div>
      <div>
      <p class="taskProperty">${text}</p>
      </div>
      <div class="remove-task" >
        <img src="./images/icon-cross.svg" alt="icon-cross" class="cross-icon" onclick="removeTask(this)">
    </div>
    `;
    // ADD NEW TASK IN THE TASK SECTION 
    todoList.insertBefore(newTask, todoList.lastElementChild);
    // COUNT UNFINISHED TASKS 
    const itemCount = document.querySelector('.itemCount');
    counter++;
    itemCount.innerHTML = `${counter} items left`;
  } 
  // INPUT FIELD CHECKBOX ANIMATION
  setTimeout(function(){
    checkboxStyle.style.content = '';
    checkBox.checked = false
    textInput.value = "";
  }, 1000);
  checkboxStyle.style.content = 'url(./images/icon-check.svg)';
})
// IF CHECKBOX CHECKED ADD IN TO THE DONE TESK AND CHANGES LEFT TASK COCUNT 
const itemCount = document.querySelector('.itemCount')
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
// TEMOVE CONCERETE TASKS FROM TASK SECTION
function removeTask(iconElement) {
  const taskElement = iconElement.closest('.task');
  taskElement.remove();
  counter--;
  itemCount.innerHTML = `${counter} items left`;
}
//  REMOVE ALL DONE TASKS FROM TASK SECTION
// const clearButton  = document.querySelector('.clear-completed');
// c
// clearButton.addEventListener('click', function() {
//   if(getTaskClass.classList.contains("doneTask")){
//     const tasks = document.querySelectorAll('.task');
//     tasks.forEach(task => {
//       task.remove();
//     });
//   }

// });
function cleareDoneTasks(){
  const taskProperty = document.querySelector('.taskProperty');
  if(taskProperty.classList.contains("doneTask")){
    const tasks = document.querySelectorAll('.task');
    for(let i=0;i<tasks.length; i++){
      tasks[i].remove();
    }
    console.log('check')
  }else{
    console.log('asdasd')
  }
}
