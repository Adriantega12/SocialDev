"use strict";

var radioBttnsContainer = document.getElementById('carousel-selectors');
var postsPreviewsContainer = document.querySelectorAll('#carousel > li');
var leftButton = document.getElementById('left');
var rightButton = document.getElementById('right');
var activeIndex = 0;
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

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  var _loop = function _loop() {
    var child = _step.value;
    child.addEventListener('click', function () {
      var prev = activeIndex;
      activeIndex = child.id;
      activatePost(prev);
    });
  };

  for (var _iterator = radioBttnsContainer.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    _loop();
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return != null) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

leftButton.addEventListener('click', function () {
  var prev = activeIndex;

  if (activeIndex <= 0) {
    activeIndex = 4;
  } else {
    --activeIndex;
  }

  activatePost(prev);
});
rightButton.addEventListener('click', function () {
  var prev = activeIndex;

  if (activeIndex >= 4) {
    activeIndex = 0;
  } else {
    ++activeIndex;
  }

  activatePost(prev);
});