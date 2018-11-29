const postList = document.getElementById('post-list');
const postListTemplate = document.getElementById('post-list-tp').innerHTML;

const promise = fetch('http://localhost:3000/posts')
  .then((response) => {
    return response.json();
  })
  .catch((error) => {
    console.log(error);
  });

promise.then((json) => {
  const posts = json.data;
  console.log(posts);
  const view = { posts };
  const listContent = Mustache.render(postListTemplate, view);
  postList.innerHTML = listContent;
});
