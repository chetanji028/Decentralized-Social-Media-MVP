 
'use client';
import ProfileCard from '../../components/ProfileCard';
import ProfileEditForm from '../../components/ProfileEditForm';
import { useAccount } from 'wagmi';

export default function Profile() {
  const { address } = useAccount();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      {address ? (
        <>
          <ProfileCard walletAddress={address} />
          <ProfileEditForm walletAddress={address} />
        </>
      ) : (
        <p>Please connect your wallet to view your profile.</p>
      )}
    </div>
  );
}