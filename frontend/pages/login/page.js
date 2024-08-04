'use client';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
  const [message, setMessage] = useState(null);
  const router = useRouter();

  const login = async (event) => {
    event.preventDefault();
    setMessage(null);
    const formData = new FormData(event.target);
    const jsonData = Object.fromEntries(formData);

    const reqOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonData),
    };

    const req = await fetch('http://127.0.0.1:1337/api/auth/local', reqOptions);
    const res = await req.json();

    if (res.error) {
      setMessage(res.error.message);
      return;
    }

    if (res.jwt && res.user) {
      localStorage.setItem('token', res.jwt);
      localStorage.setItem('user', JSON.stringify(res.user));
      setMessage('Login successful.');
      router.push('/profile/page');
    }
  };

  return (
    <div className="bg-[#629da3] flex items-center justify-center min-h-screen text-black">
      <div className="bg-white rounded-lg w-full max-w-md p-8">
        <div className="text-center mb-8">
          <h1 className="font-bold font-mono text-2xl">Login</h1>
        </div>
        <form onSubmit={login}>
          <label htmlFor="identifier" className="block p-2 font-semibold">Username/Email</label>
          <input type="text" id="identifier" name="identifier" className="block rounded bg-[#E4ECEE] w-full p-2 mb-4" />

          <label htmlFor="password" className="block p-2 font-semibold">Password</label>
          <input type="password" id="password" name="password" className="block rounded bg-[#E4ECEE] w-full p-2 mb-4" />

          <button type="submit" className="w-full bg-[#629da3] text-white font-semibold py-2 rounded hover:bg-[#507a7d] transition duration-200">Submit</button>

          <div className="mt-4 text-center">{message}</div>
        </form>
      </div>
    </div>
  );
}
