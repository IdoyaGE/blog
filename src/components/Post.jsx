import { useState } from "react";
import PostForm from "./PostForm";
import img1 from "./img/cocinazul.jpg";
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
    <article className='postEdited'>
      <img src={img1} alt='Cocina Azul' width='750px' height='750px' />
      <h2 className='title'>{post.title}</h2>
      <p className='body'>{post.body}</p>
      <button className='buttonEditar' onClick={() => setEditing(true)}>
        Editar
      </button>
      <button className='buttonDelete' onClick={handleDelete}>
        Borrar
      </button>
    </article>
  );
};
export default Post;
