'use client';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function Profile() {
  const router = useRouter();
  const [profileData, setProfileData] = useState({
    userName: '',
    email: '',
    address: '',
    companyname: '',
    profileimg: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      setError(null);

      const token = localStorage.getItem('jwt');

      if (!token) {
        router.push('/login/page');
        return;
      }

      try {
        const response = await fetch('http://127.0.0.1:1337/api/users/me', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }

        const userData = await response.json();
        console.log(userData)
        // If profile image is a relative URL, prepend the base URL of your Strapi server
        const profileimgUrl = userData.profileimg
          ? userData.profileimg.startsWith('http')
            ? userData.profileimg
            : `http://127.0.0.1:1337${userData.profileimg}`
          : 'https://via.placeholder.com/150';

        setProfileData({
          userName: userData.username, // Adjust based on your API response
          email: userData.email,
          address: userData.address || 'Address not provided',
          companyname: userData.companyname || 'Company name not provided',
          profileimg: profileimgUrl
        });
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
          <h1 className="font-bold font-mono text-2xl mb-4">User Profile</h1>

          <div className="flex flex-col items-center">
            <img 
              src={profileData.profileimg} 
              alt="Profile" 
              className="w-48 h-48 rounded-full mb-4 object-cover"
            />
            <h2 className="font-semibold text-xl mb-2">Welcome, {profileData.userName}!</h2>
            <p className=" mb-2"><span className=' font-bold underline'>Email :</span>   {profileData.email}</p>
            <p className=" mb-2"><span className=' font-bold underline'>Address :</span>   {profileData.address}</p>
            <p className=" mb-6"><span className=' font-bold underline'>Company Name :</span>   {profileData.companyname}</p>
          </div>
        </div>
        <div className='flex gap-4 pb-2'>
          <div className="flex-1">
            <a href='/update/page'>
              <button className="w-full bg-[#629da3] text-white font-semibold py-2 rounded hover:bg-[#507a7d] transition duration-200">
                Update Profile
              </button>
            </a>
          </div>
          <div className="flex-1">
            <a href='/job/page'>
              <button className="w-full bg-[#629da3] text-white font-semibold py-2 rounded hover:bg-[#507a7d] transition duration-200">
                GO TO JobPortal
              </button>
            </a>
          </div>
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
