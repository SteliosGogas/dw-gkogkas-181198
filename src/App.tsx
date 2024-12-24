import { useState, useEffect } from "react";
import axios from "axios";

// POSTS API
// https://jsonplaceholder.typicode.com/posts

interface Post {
  id: string;
  title: string;
  body: string;
}

interface PostCardProps {
  post: Post;
}

function PostCard({ post }: PostCardProps) {
  return (
    <div style={{ display: "flex" }}>
      {/*TODO: Add an image here 200x200 by keeping to enhance card just UI -> "https://picsum.photos/200/300" */}
      {/*...*/}
      <div>
        {/* TODO: Add Post Title */}
        {post.title}
      </div>
      <div>
        {/* TODO: Add Post body with 200 chars max and add ... at the end */}
        {post.body.length < 200 ? post.body : post.body.slice(0,200) + "..."}
      </div>
    </div>
  );
}

export default function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchText, setSearchText] = useState("");

  // TODO: Fetch Posts
  // TODO: Filter posts by post title based on the given query
  useEffect(() => {
    const loadingPosts = async () => {
      setIsLoading(true);
      const posts = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      setPosts(posts.data);
      console.log(posts.data);

      setIsLoading(false);
    };

    loadingPosts();
  }, []);

  const onHandleInput = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="App">
      {/*  TODO: Implement query controller */}
      <input placeholder="Search post" onChange={onHandleInput} />
      <div style={{ display: "flex", flexDirection: "column" }}>
        {/* TODO: Render the PostCard for each post */}
          {posts.map((post) => {
            return <PostCard post={post} />;
          })}
      </div>
    </div>
  );
}
