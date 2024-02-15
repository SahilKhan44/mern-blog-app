import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://cdn.midjourney.com/d241b473-192e-45e2-9243-b820395c54c5/0_2.webp')",
      }}
    >
      <div className='flex flex-col gap-6 p-28 px-3 max-w-10xl mx-auto relative bg-cover bg-center bg-no-repeat text-center' style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://cdn.midjourney.com/d241b473-192e-45e2-9243-b820395c54c5/0_2.webp')" }}>
  <h1 className="text-3xl font-bold lg:text-6xl text-white">
    Welcome to my Blog
  </h1>
  <p className="text-gray-500 text-xs sm:text-sm text-white">
    Here you'll find a variety of articles and tutorials on topics such as
    web development, software engineering, and programming languages.
  </p>
  <Link
    to="/search"
    className="text-base sm:text-lg text-purple-900 font-bold hover:underline hover:text-teal-700 inline-block text-center"
  >
    <button className="bg-teal-300 hover:bg-teal-400 text-white font-bold py-2 px-4 rounded-lg">
    View all posts
  </button>
    
  </Link>
</div>


      <div className="p-9">
        <CallToAction />
      </div>

      <div className="  flex flex-col gap-8 py-7">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center">Recent Posts</h2>
            <div className="flex flex-wrap gap-4">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={"/search"}
              className="text-lg text-teal-500 hover:underline text-center"
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
