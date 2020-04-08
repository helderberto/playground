import React, { useEffect, useState } from "react";

import Post from "./Post";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then((res) => {
      res.json().then((data) => setPosts(data));
    });
  }, [setPosts]);

  return (
    <>
      <input
        onChange={(e) => setNewPost(e.target.value)}
        type="text"
        value={newPost}
      />
      <ul>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </ul>
    </>
  );
};

export default Posts;
