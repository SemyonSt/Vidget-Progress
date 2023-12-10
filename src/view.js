const calculateCircumference = (circle) => {
  const radius = circle.r.baseVal.value;

  return 2 * Math.PI * radius;
};

export const setProgress = (elements, value) => {
  const { circle, inputValue } = elements;

  const circumference = calculateCircumference(circle);

  circle.style.strokeDasharray = `${circumference} ${circumference}`;
  circle.style.strokeDashoffset = value;

  if (value > 100) {
    inputValue.value = 100;
    value = 100;
  }
  if (value < 0) {
    inputValue.value = 0;
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
    elements.circle.style.animation = '10s linear infinite rotate';
  } else {
    elements.circle.style.animation = '';
  }
};

export const setHide = (elements) => {
  if (elements.hideValue.checked) {
    elements.circle.parentElement.style.display = 'none';
  } else {
    elements.circle.parentElement.style.display = 'block';
  }
};
