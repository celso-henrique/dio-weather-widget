import style from './style.css';

function component() {
  const element = document.createElement('div');

  element.innerHTML = 'Dio Web Component';

  return element;
}

document.body.appendChild(component());
