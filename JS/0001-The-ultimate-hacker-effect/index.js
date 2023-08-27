const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

let interval = null;

document.querySelector('h1').onmouseover = event => {
  const delay = 30; //ms
  const speed = 3; //higher = slower

  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split('')
      .map((_, index) => {
        //Return the original letter
        if (index < iteration) {
          return event.target.dataset.value[index];
        }

        //Return a random letter
        return letters[Math.floor(Math.random() * 26)];
      })
      .join('');

    if (iteration >= event.target.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / speed;
  }, delay);
};
