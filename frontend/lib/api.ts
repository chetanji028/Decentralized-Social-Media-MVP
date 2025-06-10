 
export async function createPost(data: { content: string; walletAddress: string }) {
  const res = await fetch('http://localhost:3001/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function getPosts() {
  const res = await fetch('http://localhost:3001/posts');
  return res.json();
}

export async function getPost(id: number) {
  const res = await fetch(`http://localhost:3001/posts/${id}`);
  return res.json();
}

export async function likePost(postId: number, walletAddress: string) {
  const res = await fetch(`http://localhost:3001/posts/${postId}/like`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ walletAddress }),
  });
  return res.json();
}

export async function createComment(postId: number, data: { content: string; walletAddress: string }) {
  const res = await fetch(`http://localhost:3001/posts/${postId}/comment`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
}