 
'use client';
import Feed from '../components/Feed';
import WalletConnectButton from '../components/WalletConnectButton';
import PostComposer from '../components/PostComposer';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Decentralized Social Media</h1>
        <WalletConnectButton />
      </header>
      <PostComposer />
      <Feed />
    </div>
  );
}