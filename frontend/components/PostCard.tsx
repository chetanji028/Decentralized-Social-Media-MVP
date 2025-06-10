 
'use client';
import { useEffect, useState } from 'react';
import { getPost, likePost, createComment } from '../lib/api';
import { useAccount } from 'wagmi';

export default function PostCard({ postId }: { postId: number }) {
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState('');
  const { address } = useAccount();

  useEffect(() => {
    const fetchPost = async () => {
      const data = await getPost(postId);
      setPost(data);
    };
    fetchPost();
  }, [postId]);

  const handleLike = async () => {
    if (address) await likePost(postId, address);
  };

  const handleComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (address && comment) {
      await createComment(postId, { content: comment, walletAddress: address });
      setComment('');
    }
  };

  if (!post) return <div>Loading...</div>;

  return (
    <div className="border p-4 mb-4 rounded">
      <p>{post.content}</p>
      <p>By: {post.user?.username || post.walletAddress}</p>
      <button onClick={handleLike} className="text-blue-500">
        Like ({post.likes.length})
      </button>
      <form onSubmit={handleComment} className="mt-2">
        <input
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="border p-2 w-full"
          placeholder="Add a comment"
        />
        <button type="submit" className="bg-blue-500 text-white px-2 py-1">
          Comment
        </button>
      </form>
      <div>
        {post.comments.map((c: any) => (
          <p key={c.id}>{c.content} - {c.user?.username || c.walletAddress}</p>
        ))}
      </div>
    </div>
  );
}