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
