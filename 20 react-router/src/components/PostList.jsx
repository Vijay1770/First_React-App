import Post from "./Post";
import { useContext, useEffect, useState } from "react";
import { PostList as PostListData } from "../store/post-list-store";
import React from "react";
import WelcomeMessage from "./WelcomeMessage";
import Loder from "./Loder";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);

  const [fetching, setFetching] = useState(false);

  // We are Using UseEffect hook for fetching data from server....
  useEffect(() => {
    setFetching(true);
    const controller = new AbortController(); //This AbortController are used to cleanup the fetching data...
    const signal = controller.signal; //we need to provide this signal into fetch as 2nd argument...
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
        console.log(data);
      });

    return () => {
      console.log("Cleanup...");
      controller.abort(); //Stop an action (like a data fetch) if it's no longer needed.
    };
  }, []);

  return (
    <>
      {/* If the value of fecting is true then we are showing the belo code of line [Loder].*/}
      {fetching && <Loder></Loder>}
      {/* We are added !fetching bcz jab fetching ho rhe ho to niche bale dono apni working bnd krde...fetching close hote hi run ho jaje ya normal work krne lge... */}
      {!fetching && postList.length === 0 && <WelcomeMessage></WelcomeMessage>}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};
export default PostList;
