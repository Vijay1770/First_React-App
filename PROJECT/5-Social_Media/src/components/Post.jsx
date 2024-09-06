import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  // Ensure post.reactions is a number or format it accordingly
  const reactionsCount =
    typeof post.reactions === "number" ? post.reactions : 0;

  // Ensure post.tags is an array
  const tags = Array.isArray(post.tags) ? post.tags : [];

  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="btn position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
            role="button" // Added role for accessibility
            tabIndex={0} // Added tabIndex for keyboard accessibility
          >
            <AiFillDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary hashtag">
            {tag}
          </span>
        ))}
        <div className="alert alert-success reactions" role="alert">
          This post has been reacted by {reactionsCount} people.
        </div>
      </div>
    </div>
  );
};

export default Post;
