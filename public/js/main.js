"use strict";

var editCommentBttns = document.querySelectorAll('.edit-comment');
editCommentBttns.forEach(function (btn) {
  return btn.addEventListener('click', function () {
    var editForm = document.getElementById("edit".concat(btn.dataset.id));
    editForm.classList.toggle('inactive');
  });
});