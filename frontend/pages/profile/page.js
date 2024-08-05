'use client';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function Profile() {
  const router = useRouter();
  const [userName, setUserName] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      setError(null);

      // Get the JWT token from localStorage
      const token = localStorage.getItem('jwt');

      if (!token) {
        router.push('/login');
        return;
      }

      try {
        // Fetch user data from Strapi
        const response = await fetch('http://127.0.0.1:1337/api/users/me', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }

        const userData = await response.json();
        setUserName(userData.username); // Adjust this based on your API response
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [router]);

  const logout = () => {
    localStorage.removeItem('jwt');
    router.push('/login/page');
  };

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="bg-[#629da3] flex items-center justify-center min-h-screen text-black">
      <div className="bg-white rounded-lg w-full max-w-md p-8">
        <div className="text-center mb-8">
          <h1 className="font-bold font-mono text-2xl mb-4">Profile Page</h1>
          {userName && (
            <h2 className="font-semibold text-xl mb-6">Welcome, {userName}!</h2>
          )}
        </div>
        <div className="text-center">
          <button 
            onClick={logout} 
            className="w-full bg-[#629da3] text-white font-semibold py-2 rounded hover:bg-[#507a7d] transition duration-200"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
