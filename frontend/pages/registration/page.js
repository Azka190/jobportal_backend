'use client';
import { useState } from 'react';

export default function Registration() {
  const [message, setMessage] = useState(null);

  const register = async (event) => {
    event.preventDefault();
    setMessage(null);
    
    const formData = new FormData(event.target);
    
    const reqOptions = {
      method: 'POST',
      body: formData
    };

    const req = await fetch('http://127.0.0.1:1337/api/auth/local/register', reqOptions);
    const res = await req.json();

    if (res.error) {
      setMessage(res.error.message);
      return;
    }

    if (res.jwt && res.user) {
      setMessage('Successful registration.');
    }
  };

  return (
    <div className="bg-[#629da3] flex items-center justify-center min-h-screen text-black">
      <div className="bg-white rounded-lg w-[900px] p-8">
        <div className="text-center mb-8">
          <h1 className="font-bold font-mono text-2xl">Registration</h1>
        </div>
        <form onSubmit={register}>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="username" className="block p-2 font-semibold">Username</label>
              <input type="text" id="username" name="username" className="block rounded bg-[#E4ECEE] w-full p-2" required />
            </div>
            <div>
              <label htmlFor="email" className="block p-2 font-semibold">Email</label>
              <input type="email" id="email" name="email" className="block rounded bg-[#E4ECEE] w-full p-2" required />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="companyname" className="block p-2 font-semibold">Company Name</label>
              <input type="text" id="companyname" name="companyname" className="block rounded bg-[#E4ECEE] w-full p-2" />
            </div>
            <div>
              <label htmlFor="address" className="block p-2 font-semibold">Address</label>
              <input type="text" id="address" name="address" className="block rounded bg-[#E4ECEE] w-full p-2" />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block p-2 font-semibold">Password</label>
            <input type="password" id="password" name="password" className="block rounded bg-[#E4ECEE] w-full p-2" required />
          </div>

          <div className="mb-4">
            <label htmlFor="profilePicture" className="block p-2 font-semibold">Profile Picture</label>
            <input type="file" id="profilePicture" name="profilePicture" className="block rounded bg-[#E4ECEE] w-full p-2" />
          </div>

          <button type="submit" className="w-full bg-[#629da3] text-white font-semibold py-2 rounded hover:bg-[#507a7d] transition duration-200">Submit</button>

          <div className="mt-4 text-center">{message}</div>
        </form>
      </div>
    </div>
  );
}
