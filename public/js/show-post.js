"use strict";

function getCookie() {
  var cookie = document.cookie.split('=')[1];
  return decodeURI(cookie);
} // Posts


var editCommentBttns = document.querySelectorAll('.edit-comment');
editCommentBttns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    var commentId = btn.dataset.id;
    var editForm = document.getElementById("edit".concat(commentId));
    editForm.classList.toggle('inactive');
  });
});