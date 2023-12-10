import { setAnimate, setHide, setProgress } from './view';

const app = () => {
  const elements = {
    inputValue: document.getElementById('valueInput'),
    animateValue: document.getElementById('animateToggle'),
    hideValue: document.getElementById('hideToggle'),
    circle: document.querySelector('.progress-ring__circle'),
  };

  setProgress(elements, 0);

  elements.inputValue.addEventListener('input', () => {
    const value = parseInt(elements.inputValue.value, 10);
    setProgress(elements, value);
  });

  elements.animateValue.addEventListener('change', () => {
    setAnimate(elements);
  });

  elements.hideValue.addEventListener('change', () => {
    setHide(elements);
  });
};

export default app;
