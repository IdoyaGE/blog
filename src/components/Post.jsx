import { useState } from "react";
import PostForm from "./PostForm";

//CREAMOS LOS POST

const Post = ({ post, onDelete, onEdit }) => {
  const [editing, setEditing] = useState(false);
  const handleDelete = () => {
    onDelete(post.id);
  };

  const handleEdit = (editedPost) => {
    editedPost.id = post.id;
    onEdit(editedPost);
    setEditing(false);
  };

  //post que editamos si tiene datos
  return editing ? (
    <PostForm
      post={post}
      onSubmit={handleEdit}
      onCancel={() => setEditing(false)}
    ></PostForm>
  ) : (
    <article>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <button onClick={() => setEditing(true)}>Editar</button>
      <button onClick={handleDelete}>Borrar</button>
    </article>
  );
};
export default Post;
