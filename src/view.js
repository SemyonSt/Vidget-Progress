const circle = document.querySelector('.progress-ring__circle');

const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference;

export const setProgress = (elements, value) => {
  if (value > 100) {
    elements.inputValue.value = 100;
    value = 100;
  }
  if (value < 0) {
    elements.inputValue.value = 0;
    value = 0;
  }

  if (Number.isNaN(value)) {
    circle.style.strokeDashoffset = circumference;
    return;
  }
  const offset = circumference - (value / 100) * circumference;
  circle.style.strokeDashoffset = offset;
};

export const setAnimate = (elements) => {
  if (elements.animateValue.checked) {
    circle.style.animation = '10s linear infinite rotate';
  } else {
    circle.style.animation = '';
  }
};

export const setHide = (elements) => {
  if (elements.hideValue.checked) {
    circle.parentElement.style.display = 'none';
  } else {
    circle.parentElement.style.display = 'block';
  }
};
