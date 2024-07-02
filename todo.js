

function submitTask(){
const addTask=document.getElementById('addtask').value;
const showtask=document.getElementById('showtask');

const task=addTask;
 if(task){
    const listItem=document.createElement("li");
    listItem.textContent=task;
    showtask.appendChild(listItem);
    addTask.value='';
alert("task submitted");
 }
}

// function submitTask() {
//     const addTask = document.getElementById('addtask').value.trim();
//     const showtask = document.getElementById('showtask');
//     const task = addTask;
//     if (task) {
//       const listItem = document.createElement("li");
//       listItem.textContent = task;
//       showtask.appendChild(listItem);
//       addTask.value = '';
//       alert("Task submitted");
//     }
//   }
  