'use strict'
const textInput = document.getElementById('textInput');
const checkBox = document.getElementById('checkBox');
const todoList = document.getElementById('todoList');

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
      <p id="idk" class="taskProperty" >${text}</p>
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
  if(counter != 0){
    counter--;
    itemCount.innerHTML = `${counter} items left`;
  }
}
//  REMOVE ALL DONE TASKS FROM TASK SECTION
const clearComplete = document.querySelector('.clear-completed');
clearComplete.addEventListener('click',function(){
    const taskDivs = document.querySelectorAll('.task');
    taskDivs.forEach(taskDiv => {
      const taskPropertyElement = taskDiv.querySelector('.taskProperty');
      if (taskPropertyElement.classList.contains("doneTask")){
        taskDiv.remove();
      }
    });
  });
// TASK INFO SECTION CUSTOMIZE AND FUNCTIONALLY
const taskInfoTexts = document.querySelectorAll('.task-info-text');
// REMOVE TASKINFO TEXT ACTIVE STYLE FROMM ALL ELEMENT
function removeClassFromAll(className) {
  taskInfoTexts.forEach(taskInfoText => {
    taskInfoText.classList.remove(className);
  });
}
taskInfoTexts.forEach(taskInfoText => {
  taskInfoText.addEventListener('click',() => {
    const taskShow = taskInfoText.textContent;
    console.log(taskShow)
    const taskDivs = document.querySelectorAll('.task');
    taskDivs.forEach(taskDiv => {
      const taskPropertyElement = taskDiv.querySelector('.taskProperty');
      // remove active classes
      removeClassFromAll('text-info-active');
      if(taskShow === "Active"){
        taskInfoText.classList.add('text-info-active');
        taskDiv.style.display = "flex";
        if (taskPropertyElement.classList.contains("doneTask")){
          taskDiv.style.display = "none";
        }
      }else if(taskShow === "Completed"){
        taskInfoText.classList.add('text-info-active');
        taskDiv.style.display = "none";
        if (taskPropertyElement.classList.contains("doneTask")){
          taskDiv.style.display = "flex";
        }
      }else{
        taskDiv.style.display = "flex";
      }
    });
    
  });
});



