const getPosts = () => {
  const newpost = localStorage.getItem("post");
  return newpost ? JSON.parse(newpost) : [];
};

const addPost = (post) => {
  const newpost = getPosts();
  newpost.push(post);
  localStorage.setItem("newpost", JSON.stringify(newpost));
};

const removePost = (post) => {
  const newpost = getPosts();
  const newPosts = newpost.filter((element) => post !== element);
  localStorage.stItem("newpost", JSON.stringify(newPosts));
};
