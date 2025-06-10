 
'use client';
import PostCard from '../../../components/PostCard';
import { useRouter } from 'next/router';

export default function PostPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto p-4">
      <PostCard postId={parseInt(params.id)} />
    </div>
  );
}