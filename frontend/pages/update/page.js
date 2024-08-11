'use client';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function UpdateProfile() {
  const router = useRouter();
  const [profileData, setProfileData] = useState({
    userName: '',
    email: '',
    address: '',
    companyName: '',
    profileImg: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

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

        setProfileData({
          userName: userData.username,
          email: userData.email,
          address: userData.address || '',
          companyName: userData.companyName || '',
          profileImg: userData.profileImg || ''
        });
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [router]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setProfileData({
      ...profileData,
      profileImg: e.target.files[0]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage('');

    const token = localStorage.getItem('jwt');
    if (!token) {
      router.push('/login/page');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('username', profileData.userName);
      formData.append('email', profileData.email);
      formData.append('address', profileData.address);
      formData.append('companyName', profileData.companyName);
      if (profileData.profileImg instanceof File) {
        formData.append('profileImg', profileData.profileImg);
      }

      const response = await fetch('http://127.0.0.1:1337/api/users/me', {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: formData
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to update profile');
      }

      setSuccessMessage('Profile updated successfully!');
    } catch (error) {
      setError(error.message);
    }
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
        <h1 className="font-bold font-mono text-2xl mb-4 text-center">Update Profile</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Name</label>
            <input
              type="text"
              name="userName"
              value={profileData.userName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={profileData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Address</label>
            <input
              type="text"
              name="address"
              value={profileData.address}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Company Name</label>
            <input
              type="text"
              name="companyName"
              value={profileData.companyName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Profile Image</label>
            <input
              type="file"
              name="profileImg"
              onChange={handleFileChange}
              className="w-full px-3 py-2 border rounded"
            />
            {profileData.profileImg && !(profileData.profileImg instanceof File) && (
              <div className="mt-2">
                <img src={profileData.profileImg} alt="Profile" className="w-24 h-24 rounded-full object-cover" />
              </div>
            )}
          </div>

          {successMessage && (
            <div className="text-green-500 mb-4">{successMessage}</div>
          )}

          <div className="flex gap-4">
            <button
              type="submit"
              className="w-full bg-[#629da3] text-white font-semibold py-2 rounded hover:bg-[#507a7d] transition duration-200"
            >
              Update Profile
            </button>
            <button
              type="button"
              onClick={() => router.push('/profile/page')}
              className="w-full bg-gray-400 text-white font-semibold py-2 rounded hover:bg-gray-500 transition duration-200"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
