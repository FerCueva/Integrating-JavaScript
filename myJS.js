// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function add_new_task() {
  const inputValue = document.getElementById("add-task").value;
  const isImportant = document.getElementById('is-important').checked;
  const newItem = document.createElement('li');
  const tasks = document.getElementById('tasks');
  newItem.className = isImportant? "important":"";
  const t = document.createTextNode(inputValue);

  newItem.appendChild(t);

  if (inputValue === '') 
  {
    alert("You must write something!");
  } 
  
  else 
  {
    tasks.appendChild(newItem);
  }
  
  document.getElementById("add-task").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  newItem.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

const add_button = document.getElementById('add-button');
add_button.addEventListener('click', add_new_task);


const hideImportantTask = () => {
    const importantTasks = document.getElementsByClassName('important');
    for(item of importantTasks) {
        item.style.display = "none";
    }
}

const displayAll = () => {
    const importantTasks = document.getElementsByClassName('important');
    for(item of importantTasks) {
        item.style.display = "block";
    }
}


const hide_important_button = document.getElementById('hide-important-button');
hide_important_button.addEventListener('click', hideImportantTask);

const all_button = document.getElementById('all-button');
all_button.addEventListener('click', displayAll);