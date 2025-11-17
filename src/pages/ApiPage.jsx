import React, { useEffect, useState } from "react";
import Card from "../components/Card";

const ApiPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filtered = posts.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Card>
      <h2 className="text-2xl font-bold mb-4">API Data</h2>

      <input
        type="text"
        placeholder="Search posts..."
        className="mb-4 p-2 border rounded w-full dark:bg-gray-700 dark:border-gray-600"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="space-y-3">
          {filtered.map(post => (
            <li key={post.id} className="p-3 bg-gray-200 dark:bg-gray-700 rounded">
              <h3 className="font-bold">{post.title}</h3>
              <p className="text-sm">{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
};

export default ApiPage;
