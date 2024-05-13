'use strict'
const textInput = document.getElementById('textInput');
const checkBox = document.getElementById('checkBox');
const todoList = document.getElementById('todoList');

let counter = 0;
let text=''
const checkboxStyle = document.querySelector('input[type="checkbox"]#checkBox');


          // last section position 
  // set to do task section heigh
function toDoTaskPosition(){
  const taskinfoPosition = document.querySelector('.task-info-section');
  const headerDiv = document.querySelector('.header')
  const viewPortHeight = window.innerHeight;
  const toDoTaskSection = document.querySelector('.todo-tasks');
  toDoTaskSection.style.maxHeight = viewPortHeight - (taskinfoPosition.clientHeight + headerDiv.clientHeight - 24 )+ "px";
}
window.addEventListener('resize', toDoTaskPosition);
toDoTaskPosition();
      //CHECKBOX FUNCTIONALYY 
function checkBoxFunction(){
  if (checkBox.checked && textInput.value != "" ){
    // create new div
    const newTask = document.createElement('div');
    if(icon.src.endsWith('/images/icon-moon.svg')){
      newTask.classList.add('task', 'taskStyleLight');
    }else{
      newTask.classList.add('task', 'taskStyleDark');
    }
    text = textInput.value;
    newTask.innerHTML = `
      <div class="checkBoxDiv">
          <input type="checkbox" class="tasckCheck" onclick="getPValue(this)"> 
        </div>
        <div>
        <p class="taskProperty" >${text}</p>
        </div>
        <div class="remove-task" >
          <img src="./images/icon-cross.svg" alt="icon-cross" class="cross-icon" onclick="removeTask(this)">
      </div>`
      ;
      // ADD NEW TASK IN THE TASK SECTION 
    todoList.appendChild(newTask, todoList.lastElementChild);
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
}
checkBox.addEventListener('click', checkBoxFunction )
      // ENTER KEYFRAME 
document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
      // Simulate click on checkbox
      checkBox.click();
  }
});
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
clearComplete.addEventListener('click',function() {
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
    const taskDivs = document.querySelectorAll('.task');
    taskDivs.forEach(taskDiv => {
      const taskPropertyElement = taskDiv.querySelector('.taskProperty');
      // remove active classes
      removeClassFromAll('text-info-active');
      const doneTask = document.querySelectorAll('.doneTask');
      const doneTaskCount = doneTask.length;
      if(taskShow === "Active"){
        taskInfoText.classList.add('text-info-active');
        taskDiv.style.display = "flex";
        itemCount.innerHTML = `${counter} items left`;
        if (taskPropertyElement.classList.contains("doneTask")){
          taskDiv.style.display = "none";
        }
      }else if(taskShow === "Completed"){
        taskInfoText.classList.add('text-info-active');
        taskDiv.style.display = "none";
        itemCount.innerHTML = `${doneTaskCount} items left`;
        if (taskPropertyElement.classList.contains("doneTask")){
          taskDiv.style.display = "flex";
          
        }
      }else{
        taskDiv.style.display = "flex";
        itemCount.innerHTML = `${counter} items left`;
      }
    });
    
  });
});


//            DARK MODE

const themIcon = document.querySelector('.them ');
const icon = document.querySelector('.moon-icon');
const background = document.body;
// header 
const header = document.querySelector('.header');
function 
changeThem(){
  const taskClass = document.querySelectorAll('.task');
  taskClass.forEach(taskckas => {
    taskckas.classList.add("taskStyleDark");
  })
  if(taskClass){
    taskClass.forEach(taskckas => {
      taskckas.classList.add("taskStyleDark");
      taskckas.classList.remove("taskStyleLight")
    })
  }

  if(icon.src.endsWith('/images/icon-moon.svg')){
    icon.src = "./images/icon-sun.svg"
    document.body.style.backgroundColor = '#171823';
    header.style.backgroundImage = 'url(./images/bg-mobile-dark.jpg)'
    taskClass.forEach(taskckas => {
      taskckas.classList.add("taskStyleDark");
      taskckas.classList.remove("taskStyleLight")
    })

  }else{
    icon.src = "./images/icon-moon.svg"
    document.body.style.backgroundColor = '#fafafa';
    header.style.backgroundImage = 'url(./images/bg-mobile-light.jpg)'
    taskClass.forEach(taskckas => {
      taskckas.classList.remove("taskStyleDark");
      taskckas.classList.add("taskStyleLight")
    })

  }
  
}
changeThem();
themIcon.addEventListener('click',changeThem)
