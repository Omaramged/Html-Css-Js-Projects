const titleInput = document.getElementById('noteTitle');
const bodyInput = document.getElementById('noteBody');
const addBtn = document.getElementById('addBtn');
const notesList = document.getElementById('notesList');

let notes = [];

function loadNotes() {
  const savedNotes = localStorage.getItem('myNotes');
  if (savedNotes) {
    notes = JSON.parse(savedNotes);
  }
  renderNotes();
}

function renderNotes() {
  notesList.innerHTML = '';
  
  for (let i = 0; i < notes.length; i++) {
    const note = notes[i];
    
    const noteDiv = document.createElement('div');
    noteDiv.className = 'note';
    
    const title = document.createElement('h3');
    title.innerText = note.title;
    
    const body = document.createElement('p');
    body.innerText = note.body;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerText = 'Delete';
    deleteBtn.onclick = function() {
      deleteNote(i);
    };
    
    noteDiv.appendChild(title);
    noteDiv.appendChild(body);
    noteDiv.appendChild(deleteBtn);
    
    notesList.appendChild(noteDiv);
  }
}

function addNote() {
  const titleText = titleInput.value;
  const bodyText = bodyInput.value;
  
  if (titleText === '' || bodyText === '') {
    alert('Please enter both title and body');
    return;
  }
  
  const newNote = {
    title: titleText,
    body: bodyText
  };
  
  notes.push(newNote);
  
  localStorage.setItem('myNotes', JSON.stringify(notes));
  
  titleInput.value = '';
  bodyInput.value = '';
  
  renderNotes();
}

function deleteNote(index) {
  notes.splice(index, 1);
  localStorage.setItem('myNotes', JSON.stringify(notes));
  renderNotes();
}

addBtn.onclick = addNote;

loadNotes();
