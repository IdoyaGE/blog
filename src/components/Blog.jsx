import { useState } from "react";
import Post from "./Post";
import PostForm from "./PostForm";
//Variable de estado de los post (title,body), lista de post objetos ¡, se hace map y se crea un componente post, creamos formulario con dos input y al crear llama al handdleSubmit refresca la página y llama con el post al OnSubmit que se pasa como prop
const Blog = () => {
  const [newpost, setPosts] = useState([{ title: "test", body: "prueba" }]);
  const addPost = (post) => {
    //los tres puntos es para array y post viene de PostForm.jsx (onSubmit), con está función aparece encima del placeholder
    setPosts([...newpost, post]);
  };
  const deletePost = (post) => {
    /*  const positions = post.findIndex(element) => element.title === post.title && element.body === post.body);
    setPosts(posts.splice(position, 1)); */
    setPosts(newpost.filter((element) => element !== post));
  };
  return (
    <div>
      <section>
        <h1>Blog</h1>
        <ul>
          {newpost.map((element, index) => (
            <Post key={index} post={element} onDelete={deletePost} />
          ))}
        </ul>
      </section>
      <section>
        <h1>Crea tu post:</h1>
        <PostForm onSubmit={addPost} />
      </section>
    </div>
  );
};

export default Blog;
