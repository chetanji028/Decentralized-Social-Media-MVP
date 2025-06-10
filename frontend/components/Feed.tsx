 
'use client';
import { useEffect, useState } from 'react';
import { getPosts } from '../lib/api';
import PostCard from './PostCard';

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPosts();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post.id} postId={post.id} />
      ))}
    </div>
  );
}