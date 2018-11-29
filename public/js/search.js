"use strict";

var postList = document.getElementById('post-list');
var postListTemplate = document.getElementById('post-list-tp').innerHTML;
var promise = fetch('http://localhost:3000/posts').then(function (response) {
  return response.json();
}).catch(function (error) {
  console.log(error);
});
promise.then(function (json) {
  var posts = json.data;
  console.log(posts);
  var view = {
    posts: posts
  };
  var listContent = Mustache.render(postListTemplate, view);
  postList.innerHTML = listContent;
});