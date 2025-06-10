 
'use client';
import { useState } from 'react';
import { useAccount } from 'wagmi';
import { createPost } from '../lib/api';

export default function PostComposer() {
  const [content, setContent] = useState('');
  const { address } = useAccount();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!address || content.length > 280) return;
    await createPost({ content, walletAddress: address });
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full p-2 border rounded"
        placeholder="What's on your mind?"
        maxLength={280}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
        disabled={!address}
      >
        Post
      </button>
    </form>
  );
}