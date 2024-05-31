import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostList } from "../store/post-list.store";

function Post({ post }) {
  const { deletePost } = useContext(PostList);

  return (
    <div className="card postcard" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}{" "}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            <AiFillDelete onClick={() => deletePost(post.id)} />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-success hashtag">
            {tag}
          </span>
        ))}
        <div className="alert alert-dark reactions" role="alert">
          This post has been reacted by {post.reactions} peoples
        </div>
      </div>
    </div>
  );
}

export default Post;
