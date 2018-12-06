function getCookie() {
  const cookie = document.cookie.split('=')[1];
  return decodeURI(cookie);
}

// Posts
const editCommentBttns = document.querySelectorAll('.edit-comment');

editCommentBttns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const commentId = btn.dataset.id;
    const editForm = document.getElementById(`edit${commentId}`);
    editForm.classList.toggle('inactive');
  });
});
