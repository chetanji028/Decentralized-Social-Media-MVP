 
# Decentralized Social Media MVP

This is a Minimal Viable Product (MVP) for a decentralized social media platform built using Ethereum wallet authentication. Users can log in via their Ethereum wallet, create and update profiles, post short messages (up to 280 characters), view a public feed, and interact with posts through likes and comments.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [How to Use](#how-to-use)
- [Screenshots](#screenshots)
- [Demo Video](#demo-video)

## Features
- **Wallet Authentication**: Users log in using their Ethereum wallet via RainbowKit and ethers.js.
- **User Profiles**: Create and update profiles with a username, bio, and profile picture URL, using the wallet address as the unique identifier.
- **Posts**: Create text-based posts (max 280 characters) and view a public feed of all posts.
- **Interactions**: Like and comment on posts.
- **Responsive Design**: Mobile-first UI built with Tailwind CSS.

## Technologies Used
- **Frontend**:
  - React.js
  - Next.js
  - Tailwind CSS
  - RainbowKit (for wallet connection)
  - wagmi (for Web3 integration)
  - ethers.js
- **Backend**:
  - NestJS
  - TypeScript
  - PostgreSQL (with Prisma ORM)
- **Web3 Integration**:
  - ethers.js (for signature verification)
  - RainbowKit (for user-friendly wallet UI)
- **Development Tools**:
  - Node.js
  - Prisma CLI
  - AI tools (e.g., GitHub Copilot, ChatGPT) for code generation and debugging

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- PostgreSQL (running locally or via a service like Supabase)
- An Ethereum wallet (e.g., MetaMask) for testing
- Git (for cloning the repository)

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend 
   Install dependencies: npm install 
   Set up environment variables:Copy the example file (cp .env.example .env)
   Update .env with your PostgreSQL credentials: DATABASE_URL="postgresql://your_username:your_password@localhost:5432/social_media?schema=public" 

   Run database migrations:npx prisma migrate dev 
   Start the backend server: npm run start:dev 

   The backend will run on http://localhost:3001.

### Frontend Setup
Navigate to the frontend directory:cd frontend 
Install dependencies:npm install 
Set up environment variables:Copy the example file:(cp .env.local.example .env.local)

Ensure NEXT_PUBLIC_API_URL points to the backend:
NEXT_PUBLIC_API_URL="http://localhost:3001" 

Start the frontend server: npm run dev 
The frontend will run on http://localhost:3000.

### Running the Application
Open http://localhost:3000 in a browser.

Connect your Ethereum wallet using the "Connect Wallet" button (via MetaMask or another wallet supported by RainbowKit).

Create or update your profile at /profile.

Post messages and interact with posts on the home page (/).

View individual post details at /post/[id].

### How to use
Connect Wallet:
Click the "Connect Wallet" button on the homepage to authenticate using your Ethereum wallet.

No additional signup is required; the wallet address serves as your identity.

Create/Update Profile:
Navigate to /profile to set or edit your username, bio, and profile picture URL.

Create Posts:
Use the post composer on the homepage to write messages (max 280 characters).

Posts are saved to the database and displayed in the public feed.

Interact with Posts:
Like or comment on posts in the feed or on individual post pages (/post/[id]).

View Feed:
The homepage (/) displays a feed of all users' posts, sorted by timestamp (newest first).








 





 











