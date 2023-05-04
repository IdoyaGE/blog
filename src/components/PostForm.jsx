import { useState } from "react";
//REALIZAMOS VARIACIONES
const PostForm = ({ onSubmit, post, onCancel }) => {
  const [title, setTitle] = useState(post ? post.title : "");
  const [body, setBody] = useState(post ? post.body : "");
  //El preventDefault para que no realice el submit, guardamos en una constante el título y el body
  // Se actualiza el estado directamente por el OnChange y lo muestra
  const handleSubmit = (e) => {
    e.preventDefault();
    const post = { title, body };
    onSubmit(post);
    setBody("");
    setTitle("");
  };
  const handleCancel = (e) => {
    e.preventDefault();
    onCancel();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='title'>Título</label>
      <input
        type='text'
        id='title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor='body'>Contenido</label>
      <textarea
        id='body'
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></textarea>
      <button type='submit'>{post ? "Guardar" : "Crear"}</button>
      {post && <button onClick={handleCancel}>Cancelar</button>}
    </form>
  );
};
export default PostForm;
