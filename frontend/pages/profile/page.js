'use client';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Profile() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    }
  }, [router]);

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    router.push('/login/page');
  };

  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="bg-[#629da3] flex items-center justify-center min-h-screen text-black">
      <div className="bg-white rounded-lg w-full max-w-md p-8">
        <div className="text-center mb-8">
          <h1 className="font-bold font-mono text-2xl">Profile</h1>
        </div>
        <div>
          <p>Welcome, {user?.username}</p>
          <button onClick={logout} className="w-full bg-[#629da3] text-white font-semibold py-2 rounded hover:bg-[#507a7d] transition duration-200 mt-4">Logout</button>
        </div>
      </div>
    </div>
  );
}
