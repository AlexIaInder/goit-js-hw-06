const inputEl = document.querySelector('#validation-input');

const inputLength = inputEl.dataset.length;

const input = document.querySelector('input');
inputEl.addEventListener('change', () => {
  const text = inputEl.value;

  if (text.length === +inputLength) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else if (text.length) {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  } else {
    inputEl.classList.remove('invalid');
    inputEl.classList.remove('valid');
  }
});