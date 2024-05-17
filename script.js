'use strict'
const textInput = document.getElementById('textInput');
const checkBox = document.getElementById('checkBox');
const todoList = document.getElementById('todoList');
const textInputDiv = document.querySelector('.input');
const task = document.querySelectorAll('.task')//task div customize
// task info section 
const taskInfos = document.querySelector('.taskInfos ')
const taskInfoControll = document.querySelector('.task-ifno-controll')

//        DARK THEM CHANGE 
const themButton = document.querySelector('.them');
const header = document.querySelector('.header');

// *Function to update theme class for all existing tasks
function updateTaskThemeClass() {
  //          toggle classes
  document.body.classList.toggle("dark-mode");//body them
  textInput.classList.toggle('textInputDark');
  textInputDiv.classList.toggle('checkboxDark');
  taskInfos.classList.toggle('textInputDark')
  taskInfoControll.classList.toggle("textInputDark");

  const themIcon = document.querySelector('.themIcon');// icon
  const checkBoxDivs = document.querySelectorAll('.checkBoxDiv');

  if (document.body.classList.contains("dark-mode")) {
    header.style.backgroundImage = "url(./images/bg-mobile-dark.jpg)";
    themIcon.src = '/images/icon-sun.svg';
    task.forEach(tasks => {
      tasks.classList.remove('taskDivLight');
      tasks.classList.add('taskDivDark');
    });
    checkBoxDivs.forEach(checkBoxDiv => {
      checkBoxDiv.classList.remove('checkboxLight');
      checkBoxDiv.classList.add('checkboxDark');
    })
  } else {
    header.style.backgroundImage = "url(./images/bg-mobile-light.jpg)"
    themIcon.src = '/images/icon-moon.svg';
    task.forEach(tasks => {
      tasks.classList.add('taskDivLight');
      tasks.classList.remove('taskDivDark');
    });
    checkBoxDivs.forEach(checkBoxDiv => {
      checkBoxDiv.classList.add('checkboxLight');
      checkBoxDiv.classList.remove('checkboxDark');
    });
  }

}
//         *THEM CHANGE BUTTON EVENT LISTENER
themButton.addEventListener('click', updateTaskThemeClass);
//          *CREATE NEW TASK DIV
function createTaskDiv() {
  // create new div
  const newTask = document.createElement('div');
  let text = '';
  text = textInput.value;
  if (document.body.classList.contains("dark-mode")) {
    newTask.classList.add('task', 'taskDivDark');
    newTask.innerHTML = `
    <div class="checkBoxDiv checkboxDark">
        <input type="checkbox" class="tasckCheck" onclick="getPValue(event)"> 
    </div>
      <p class="taskProperty" >${text}</p> 
    <div class="remove-task" >
      <img src="./images/icon-cross.svg" alt="icon-cross" class="cross-icon" onclick="removeTask(this)">
    </div>
    `;
    todoList.appendChild(newTask);
  } else {
    newTask.classList.add('task', 'taskDivLight');
    newTask.innerHTML = `
    <div class="checkBoxDiv checkboxLight">
        <input type="checkbox" class="tasckCheck" onclick="getPValue(event)"> 
    </div>
      <p class="taskProperty" >${text}</p>
    <div class="remove-task" >
      <img src="./images/icon-cross.svg" alt="icon-cross" class="cross-icon" onclick="removeTask(this)">
    </div>
    `;
    todoList.appendChild(newTask);
  }
}
//          CREAT TASK COUNTER 
let
  counter = 0;
const itemCounter = document.querySelector('.itemCount');
function itemCounterFnc() {
  // count unfinished tasks 
  counter++;
  itemCounter.innerHTML = `${counter} items left`;
}
//          CHECKBOX ANIMATION
function checkboxAnimationFnc() {
  const checkboxStyle = document.querySelector('input[type="checkbox"]#checkBox');
  setTimeout(function () {
    checkboxStyle.style.content = '';
    checkBox.checked = false
    textInput.value = "";
  }, 1000);
  checkboxStyle.style.content = 'url(./images/icon-check.svg)';
}
//          CHECKBOX FUNCTIONALLY
checkBox.addEventListener('click', function () {
  if (textInput.value != "") {
    createTaskDiv();//add new task div
    itemCounterFnc();// count undefine tasks
    checkboxAnimationFnc();// checkbox animation
    checkBox.checked = true
  } else {
    checkBox.checked = false;
  }
})

// *task checkbox checked functionally
function getPValue(event) {
  const checkbox = event.target;
  const parentDiv = checkbox.closest('.task');
  const pElement = parentDiv.querySelector('.taskProperty');
  if (checkbox.checked) {
    pElement.classList.add('doneTask')
    counter--;
  } else {
    pElement.classList.remove('doneTask')
    counter++;
  }
  itemCounter.innerHTML = `${counter} items left`;
}
// *REMOVE CONCERETE TASKS FROM TASK SECTION
function removeTask(removeIcon) {
  const parentDiv = removeIcon.closest('.task');
  parentDiv.remove();
  if (counter != 0) {
    counter--;
  }
  itemCounter.innerHTML = `${counter} items left`;
}
//  !REMOVE ALL DONE TASKS FROM TASK SECTION
const clearComplete = document.querySelector('.clear-completed');
clearComplete.addEventListener('click', function () {
  task.forEach(taskDiv => {
    const taskPropertyElement = taskDiv.querySelector('.taskProperty');
    if (taskPropertyElement.classList.contains("doneTask")) {
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
  taskInfoText.addEventListener('click', () => {
    const taskShow = taskInfoText.textContent;
    const taskDivs = document.querySelectorAll('.task');
    taskDivs.forEach(taskDiv => {
      const taskPropertyElement = taskDiv.querySelector('.taskProperty');
      // remove active classes
      removeClassFromAll('text-info-active');
      if (taskShow === "Active") {
        taskInfoText.classList.add('text-info-active');
        taskDiv.style.display = "flex";
        if (taskPropertyElement.classList.contains("doneTask")) {
          taskDiv.style.display = "none";
        }
      } else if (taskShow === "Completed") {
        taskInfoText.classList.add('text-info-active');
        taskDiv.style.display = "none";
        if (taskPropertyElement.classList.contains("doneTask")) {
          taskDiv.style.display = "flex";
        }
      } else {
        taskDiv.style.display = "flex";
      }
    });

  });
});


// taskinfoPosition.style.marginTop = viewPortHeight - (todoTasks.clientHeight + headerDiv.clientHeight  + 111)+  "px";
