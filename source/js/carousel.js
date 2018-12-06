const radioBttnsContainer = document.getElementById('carousel-selectors');
const postsPreviewsContainer = document.querySelectorAll('#carousel > li');
const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right');
let activeIndex = 0;
radioBttnsContainer.children[activeIndex].classList.add('rd-selected');
postsPreviewsContainer[activeIndex].classList.remove('inactive');

function updateRds(prev) {
  radioBttnsContainer.children[activeIndex].classList.add('rd-selected');
  radioBttnsContainer.children[prev].classList.remove('rd-selected');
}

function activatePost(prev) {
  postsPreviewsContainer[prev].classList.add('inactive');
  postsPreviewsContainer[activeIndex].classList.remove('inactive');
  updateRds(prev);
}

for (const child of radioBttnsContainer.children) {
  child.addEventListener('click', () => {
    const prev = activeIndex;
    activeIndex = child.id;
    activatePost(prev);
  });
}

leftButton.addEventListener('click', () => {
  const prev = activeIndex;
  if (activeIndex <= 0) {
    activeIndex = 4;
  } else {
    --activeIndex;
  }
  activatePost(prev);
});

rightButton.addEventListener('click', () => {
  const prev = activeIndex;
  if (activeIndex >= 4) {
    activeIndex = 0;
  } else {
    ++activeIndex;
  }
  activatePost(prev);
});
