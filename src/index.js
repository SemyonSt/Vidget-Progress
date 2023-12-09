import './style.css';

const circle = document.querySelector('.progress-ring__circle');
const inputValue = document.getElementById('valueInput');
const animate = document.getElementById('animateToggle');
const hide = document.getElementById('hideToggle');

const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference;

const setProgress = (percent) => {
  if (Number.isNaN(percent)) { 
    circle.style.strokeDashoffset = circumference; 
    return;
  }
  const offset = circumference - (percent / 100) * circumference;
  circle.style.strokeDashoffset = offset;
};

inputValue.addEventListener('input', () => {
  const value = parseInt(inputValue.value, 10);
  setProgress(value);
});

animate.addEventListener('change', () => {
  if (animate.checked) {
    circle.style.animation = '10s linear infinite rotate';
    circle.style.transform = 'rotate(-90deg)';
  } else {
    circle.style.animation = '';
  }
});

hide.addEventListener('change', () => {
  if (hide.checked) {
    circle.parentElement.style.display = 'none';
  } else {
    circle.parentElement.style.display = 'block';
  }
});
