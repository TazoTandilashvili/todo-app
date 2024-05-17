'use strict'
const textInput = document.getElementById('textInput');
const checkBox = document.getElementById('checkBox');
const todoList = document.getElementById('todoList');
const textInputDiv = document.querySelector('.input');
// task info section 
const taskInfos = document.querySelector('.taskInfos ')
const taskInfoControll = document.querySelector('.task-ifno-controll')
//          *CREATE NEW TASK DIV
const error = document.querySelector('.error'); //error div
const errorStyle = error.style.display;
function createTaskDiv() {
  const completed = document.getElementById('completed');
  // create new div
  const newTask = document.createElement('div');
  let text = '';
  text = textInput.value;
  if (document.body.classList.contains("dark-mode")) {
    // check if completed is check
    if (completed.classList.contains('text-info-active')) {
      error.style.display = 'flex';
    } else {
      newTask.classList.add('task', 'taskDivDark', 'transition');
      newTask.innerHTML = `
      <div class="checkBoxDiv checkboxDark">
          <input type="checkbox" class="tasckCheck" onclick="getPValue(event)"> 
      </div>
        <p class="taskProperty" >${text}</p> 
      <div class="remove-task" >
        <img src="./images/icon-cross.svg" alt="icon-cross" class="cross-icon" onclick="removeTask(this)">
      </div>
      `;
      error.style.display = 'none';
      todoList.appendChild(newTask);
    }

  } else {
    if (completed.classList.contains('text-info-active')) {
      error.style.display = 'flex';;
    } else {
      newTask.classList.add('task', 'taskDivLight', 'transition');
      newTask.innerHTML = `
      <div class="checkBoxDiv checkboxLight">
          <input type="checkbox" class="tasckCheck" onclick="getPValue(event)"> 
      </div>
        <p class="taskProperty" >${text}</p>
      <div class="remove-task" >
        <img src="./images/icon-cross.svg" alt="icon-cross" class="cross-icon" onclick="removeTask(this)">
      </div>
      `;
      error.style.display = "none";
      todoList.appendChild(newTask);
    }
  }
}
//          CREAT TASK COUNTER 
let counter = 0;
const itemCounter = document.querySelector('.itemCount');
function itemCounterFnc() {
  // count unfinished tasks 
  if (!completed.classList.contains('text-info-active')) {
    counter++;
    itemCounter.innerHTML = `${counter} items left`;
  }
}
//           *CHECKBOX ANIMATION
function checkboxAnimationFnc() {
  const checkboxStyle = document.querySelector('input[type="checkbox"]#checkBox');
  setTimeout(function () {
    checkboxStyle.style.content = '';
    checkBox.checked = false
    textInput.value = "";
  }, 1000);
  checkboxStyle.style.content = 'url(./images/icon-check.svg)';
}
//          *CHECKBOX FUNCTIONALLY
checkBox.addEventListener('click', function () {
  if (textInput.value != "") {
    createTaskDiv();//add new task div
    itemCounterFnc();// count undefine tasks
    checkboxAnimationFnc();// checkbox animation
    resizeFnc()
    checkBox.checked = true
  } else {
    checkBox.checked = false;
  }
})

//          *task checkbox checked functionally
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
//          *REMOVE CONCERETE TASKS FROM TASK SECTION
function removeTask(removeIcon) {
  const parentDiv = removeIcon.closest('.task');
  parentDiv.remove();
  if (counter != 0) {
    counter--;
  }
  itemCounter.innerHTML = `${counter} items left`;
}
//          *REMOVE ALL DONE TASKS FROM TASK SECTION
const clearComplete = document.querySelector('.clear-completed');
clearComplete.addEventListener('click', function () {
  const task = document.querySelectorAll('.task');
  task.forEach(taskDiv => {
    const taskPropertyElement = taskDiv.querySelector('.taskProperty');
    if (taskPropertyElement.classList.contains("doneTask")) {
      taskDiv.remove();
    }
  });
});

// todo TASK INFO SECTION CUSTOMIZE AND FUNCTIONALLY
const taskInfoTexts = document.querySelectorAll('.task-info-text');
// REMOVE TASKINFO TEXT ACTIVE STYLE FROMM ALL ELEMENT
function removeClassFromAll(className) {
  taskInfoTexts.forEach(taskInfoText => {
    taskInfoText.classList.remove(className);
  });
}
taskInfoTexts.forEach(taskInfoText => {
  taskInfoText.addEventListener('click', function () {
    const taskShow = taskInfoText.textContent;
    const task = document.querySelectorAll('.task');
    // REMOVE CLASS FROM ALL ELEMENT

    // TODO TASKiNFO FUNCTIONALLY
    task.forEach(tasks => {
      const doneTask = tasks.querySelector('.taskProperty');
      removeClassFromAll("text-info-active");
      if (taskShow === "All") {
        taskInfoText.classList.add('text-info-active');
        tasks.classList.remove('displayNone');
        error.style.display = "none";
      } else if (taskShow === "Active") {
        taskInfoText.classList.add('text-info-active');
        error.style.display = "none";
        if (doneTask.classList.contains('doneTask')) {
          tasks.classList.add('displayNone');
        } else {
          tasks.classList.remove('displayNone');
        }
      } else {
        console.log('all Completed shown');
        taskInfoText.classList.add('text-info-active');
        if (doneTask.classList.contains('doneTask')) {
          tasks.classList.remove('displayNone');
        } else {
          tasks.classList.add('displayNone');
        }
      }
    })
  })
})

// error cros function 
const errorClose = document.querySelector('.error-cross');
errorClose.addEventListener('click', function () {
  error.style.display = 'none';
})


//        DARK THEM CHANGE 
const themButton = document.querySelector('.them');
const header = document.querySelector('.header');
// *Function to update theme class for all existing tasks
function updateTaskThemeClass() {
  //          toggle classes
  error.classList.toggle('errorDark');
  document.body.classList.toggle("dark-mode");//body them
  textInput.classList.toggle('textInputDark');
  textInputDiv.classList.toggle('checkboxDark');
  taskInfos.classList.toggle('textInputDark')
  taskInfoControll.classList.toggle("textInputDark");

  const themIcon = document.querySelector('.themIcon');// icon
  const checkBoxDivs = document.querySelectorAll('.checkBoxDiv');
  const task = document.querySelectorAll('.task')//task div customize
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
      tasks.classList.remove('taskDivDark');
      tasks.classList.add('taskDivLight');
    });
    checkBoxDivs.forEach(checkBoxDiv => {
      checkBoxDiv.classList.add('checkboxLight');
      checkBoxDiv.classList.remove('checkboxDark');
    });
  }

}
//         *THEM CHANGE BUTTON EVENT LISTENER
themButton.addEventListener('click', updateTaskThemeClass);

//  scroll bar for the task divs
function resizeFnc() {
  const todoTaskSEction = document.querySelector('.todo-tasks')
  const taskInfo = document.querySelector('.task-info-section')
  const windowHeight = window.innerHeight;
  const taskDivHeight = todoList.offsetHeight
  todoTaskSEction.style.height = windowHeight - (header.offsetHeight + taskInfo.offsetHeight - 24) + 'px';
  console.log(windowHeight - (header.offsetHeight + taskInfo.offsetHeight))
}

window.addEventListener('resize', resizeFnc)

// taskinfoPosition.style.marginTop = viewPortHeight - (todoTasks.clientHeight + headerDiv.clientHeight  + 111)+  "px";
