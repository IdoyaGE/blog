//CREAMOS LOS POST

const Post = ({ post, onDelete }) => {
  const handleDelete = () => {
    onDelete(post);
  };
  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <button onClick={handleDelete}>Borrar</button>
    </article>
  );
};
export default Post;
