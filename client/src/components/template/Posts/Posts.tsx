import { useEffect } from "react";
import { fetchAllPosts, selectPosts } from "../../../features/post/Post";
import { useAppSelector } from "../../../store/hooks";
import Post from "../../organisms/Post/Post";
import store from "../../../store/store";
import "./Posts.scss";

const Posts = () => {
  const posts = useAppSelector(selectPosts);
  useEffect(() => {
    store.dispatch(fetchAllPosts());
  }, []);
  return (
    <div className="row mt-n1">
      {posts.posts.map((post, key) => (
        <Post
          key={key}
          title={post.title}
          message={post.message}
          selectedFile={post.selectedFile}
          creator={post.creator}></Post>
      ))}
    </div>
  );
};
export default Posts;
