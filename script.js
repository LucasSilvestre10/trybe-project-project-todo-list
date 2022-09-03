function newAssignment() {
  const input = document.getElementById('texto-tarefa');
  const list = document.getElementById('lista-tarefas');
  const item = document.createElement('li');
  list.appendChild(item).innerText = input.value;
  input.value = '';
}

function selectAssignment(event) {
  const list = document.getElementsByTagName('li');
  const target = event.target;
  for (let index = 0; index < list.length; index += 1) {
    if (list[index].style.backgroundColor === 'rgb(128, 128, 128)') {
      list[index].style.backgroundColor = '';
    }
  }
  target.style.backgroundColor = 'rgb(128, 128, 128)';
}

function completed(event) {
  const target = event.target;
  target.classList.toggle('completed');
}

function clearList() {
  const list = document.getElementsByTagName('li');
  if (list) {
    Array.from(list).forEach((element) => {
      element.remove();
    });
  }
}

function deleteFinished() {
  const list = document.getElementsByTagName('li');
  if (list) {
    Array.from(list).forEach((element) => {
      if (element.classList.value.includes('completed')) {
        element.remove();
      }
    });
  }
}

function save() {
  const saveList = [];
  const list = document.getElementsByTagName('li');
  for (let index = 0; index < list.length; index += 1) {
    const item = {
      text: '',
      class: '',
    };
    item.text = list[index].innerText;
    item.class = list[index].classList.value;
    saveList.push(item);
  }
  localStorage.setItem('listAssignment', JSON.stringify(saveList));
}

function reloadAssignment() {
  const text = localStorage.getItem('listAssignment');
  if (text) {
    const obj = JSON.parse(text);
    const list = document.getElementById('lista-tarefas');
    for (let index = 0; index < obj.length; index += 1) {
      const item = document.createElement('li');
      list.appendChild(item).innerText = obj[index].text;
      item.classList.value = obj[index].class;
    }
  }
}

function moveUp() {
  const list = document.getElementsByTagName('li');
  let target = '';
  let position = 0;
  for (let index = 0; index < list.length; index += 1) {
    if (list[index].style.backgroundColor === 'rgb(128, 128, 128)') {
      target = list[index];
      position = index;
    }
  }
  if (position > 0 && target !== '') {
    target.parentNode.insertBefore(target, target.previousElementSibling);
  }
}
function moveDown() {
  const list = document.getElementsByTagName('li');
  let target = '';
  let position = 0;
  let length = list.length;
  for (let index = 0; index < list.length; index += 1) {
    if (list[index].style.backgroundColor === 'rgb(128, 128, 128)') {
      target = list[index];
      position = index + 1;
    }
  }
  if (position < length && target !== '') {
    target.parentNode.insertBefore(target.nextElementSibling, target);
  }
}

function remove() {
  const list = document.getElementsByTagName('li');
  let target = '';
  for (let index = 0; index < list.length; index += 1) {
    if (list[index].style.backgroundColor === 'rgb(128, 128, 128)') {
      target = list[index];
    }
  }
  if (target !== '') {
    target.remove();
  }
}

window.onload = function load() {
  reloadAssignment();
};
