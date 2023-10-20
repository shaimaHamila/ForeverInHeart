import { useEffect } from "react";
import { fetchAllPosts, selectPosts } from "../../features/post/Post";
import { useAppSelector } from "../../store/hooks";
import Post from "./Post/Post";
import store from "../../store/store";

const Posts = () => {
  const posts = useAppSelector(selectPosts);
  console.log(posts);
  useEffect(() => {
    store.dispatch(fetchAllPosts());
  }, []);
  return (
    <div>
      <Post />
      <Post />
    </div>
  );
};
export default Posts;
