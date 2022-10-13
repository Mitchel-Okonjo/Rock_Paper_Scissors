function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }
const options = Array.from(document.querySelectorAll('.btn-yours'));
options.forEach(option => option.addEventListener('click', () => option.classList.add('playing')));
options.forEach(option => option.addEventListener('transitionend', removeTransition));



