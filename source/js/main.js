const editCommentBttns = document.querySelectorAll('.edit-comment');

editCommentBttns.forEach(btn => btn.addEventListener('click', () => {
  const editForm = document.getElementById(`edit${btn.dataset.id}`);
  editForm.classList.toggle('inactive');
}));
