
const countValueEl = document.getElementById('count-number');
const decreaseBtn = document.getElementById('decrease-btn');
const increaseBtn = document.getElementById('increase-btn');

let count = 1;

function changeCount(action) {
  let step = 0;

  if (action === 'increase') {
    step = 1;
  } else if (action === 'decrease') {
    step = -1;
  }

  for (let i = 0; i < 1; i++) {
    count = count + step;
  }

  countValueEl.textContent = count;
}

increaseBtn.addEventListener('click', function () {
  changeCount('increase');
});

decreaseBtn.addEventListener('click', function () {
  changeCount('decrease');
});