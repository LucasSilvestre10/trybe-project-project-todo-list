function newAssignment() {
  const input = document.getElementById('texto-tarefa');
  const list = document.getElementById('lista-tarefas');
  const item = document.createElement('li');
  list.appendChild(item).innerText = input.value;
  input.value = '';
}

function selectssignment(event) {
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
      console.log(element.classList.value);
      if (element.classList.value.includes('completed')) {
        element.remove();
      }
    });
  }
}
