const textarea = document.getElementsByClassName("textarea");

function ajustarAltura() {
  textarea.style.height = 'auto';
  textarea.style.height = `${textarea.scrollHeight}px`;
}

textarea.addEventListener('input', ajustarAltura);