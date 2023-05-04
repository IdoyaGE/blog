import { useEffect, useState } from "react";
import Post from "./Post";
import PostForm from "./PostForm";
//DONDE SE GUARDAN LOS POST

//Variable de estado de los post (title,body), lista de post objetos ¡, se hace map y se crea un componente post, creamos formulario con dos input y al crear llama al handdleSubmit refresca la página y llama con el post al OnSubmit que se pasa como prop
const Blog = () => {
  const [newpost, setPosts] = useState([]);
  //Meteriamos un fetch para conectar con el servidor
  const addPost = (post) => {
    const id = newpost.length; //los tres puntos es para array y post viene de PostForm.jsx (onSubmit), con está función aparece encima del placeholder
    post.id = id;
    setPosts([...newpost, post]);
  };
  const deletePost = (id) => {
    /*  const positions = post.findIndex(element) => element.title === post.title && element.body === post.body);
    setPosts(posts.splice(position, 1)); */
    setPosts(newpost.filter((element) => element.id !== id));
  };
  const editPost = (editedPost) => {
    const newPosts = [...newpost];
    newPosts[editedPost.id] = editedPost;
    setPosts(newPosts);
  };
  return (
    <div>
      <section>
        <h1 className='blog'>Blog</h1>
        <ul>
          {newpost.map((element) => (
            <Post
              key={element.id}
              post={element}
              onDelete={deletePost}
              onEdit={editPost}
            />
          ))}
        </ul>
      </section>
      <section>
        <h1 className='crea'>Crea tu post:</h1>
        <PostForm onSubmit={addPost} />
      </section>
    </div>
  );
};

export default Blog;
