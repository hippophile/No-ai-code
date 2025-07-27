const addTask   = document.getElementById('addTaskButton');
const formWrap = document.getElementById('taskFormContainer');
const cancel   = formWrap.querySelector('.cancel');
const save     = formWrap.querySelector('.save');

const titleInput = formWrap.querySelector('[name="title"]');
const descInput = formWrap.querySelector('[name="description"]');
const todoZone = document.getElementById('todo')

var dragItem = document.querySelector('.dragElement');
var dropZoneSet = Array.from(document.querySelectorAll('.dropZone'))

// Show the form when the "Add Task" button is clicked
addTask.addEventListener('click', () => {
  formWrap.classList.remove('hidden');
});

// and hide it when the "Cancel" button is clicked.
cancel.addEventListener('click', () => {
  formWrap.classList.add('hidden');

});

save.addEventListener('click', () => {
  // 1) διάβασε τι έγραψε ο χρήστης:
  const title = titleInput.value;
  const desc  = descInput.value;

  if (!title) {
    return;
  }

  // 2) κάνε αυτό που θες (π.χ. createNewCard(title, desc))

  // Create a new task element
  const newTask = document.createElement('div');
  newTask.setAttribute('draggable', 'true');
  newTask.classList.add('dragElement'); // σημαντικό για το styling και events
  newTask.id = 'task-' + Date.now();

  newTask.innerHTML = `<h3>${title}</h3><p>${desc}</p>`;
  todoZone.appendChild(newTask);
  newTask.addEventListener('dragstart', () => {
    dragItem = newTask;
  });

  formWrap.classList.add('hidden');
  titleInput.value = '';
  descInput.value  = '';
});

// Drag and Drop functionality

dropZoneSet.forEach(dropzone => {
  dropzone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropzone.appendChild(dragItem);
});
});

dropZoneSet.forEach((dropZone) => {
//hovering over
  dropZone.addEventListener('dragover', () => {
    dropZone.classList.add('hoverOver');
  });
  //no longer hovering over
   dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('hoverOver');
  });

});

