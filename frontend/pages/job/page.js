'use client';
import { useState, useEffect } from 'react';

export default function JobEntry() {
  const [message, setMessage] = useState(null);

  const register = async (event) => {
    event.preventDefault();
    setMessage(null);

    const formData = new FormData(event.target);
    const jsonData = Object.fromEntries(formData);

    const token = localStorage.getItem('jwt'); // Retrieve token from localStorage

    const reqOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` // Use token in header
      },
      body: JSON.stringify({ data: jsonData })
    };

    try {
      const req = await fetch('http://127.0.0.1:1337/api/jobs', reqOptions);
      const res = await req.json();

      if (req.status !== 200) {
        setMessage(res.error ? res.error.message : 'An error occurred.');
        return;
      }

      setMessage('Job entry successful.');
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="bg-[#629da3] flex gap-9 min-h-screen p-6 text-black">
    <div className="flex-1 bg-white rounded-lg w-full max-w-md p-8">
        <div className="text-center mb-8">
            <h1 className="font-bold font-mono text-2xl">Job Entry</h1>
        </div>
        <form onSubmit={register}>
            <label htmlFor="jobtitle" className="block p-2 font-semibold">Job Title</label>
            <input type="text" id="jobtitle" name="jobtitle" className="block rounded bg-[#E4ECEE] w-full p-2 mb-4" required />

            <label htmlFor="jobtype" className="block p-2 font-semibold">Job Type</label>
            <select id="jobtype" name="jobtype" className="block rounded bg-[#E4ECEE] w-full p-2 mb-4" required>
                <option value="Permanent">Permanent</option>
                <option value="Contract">Contract</option>
            </select>

            <label htmlFor="education" className="block p-2 font-semibold">Education</label>
            <select id="education" name="education" className="block rounded bg-[#E4ECEE] w-full p-2 mb-4" required>
                <option value="Master">Master</option>
                <option value="Bachelor">Bachelor</option>
                <option value="Intermediate">Intermediate</option>
            </select>

            <label htmlFor="industry" className="block p-2 font-semibold">Industry</label>
            <select id="industry" name="industry" className="block rounded bg-[#E4ECEE] w-full p-2 mb-4" required>
                <option value="Business">Business</option>
                <option value="Banking">Banking</option>
                <option value="Education">Education</option>
                <option value="Telecommunication">Telecommunication</option>
                <option value="Others">Others</option>
            </select>

            <label htmlFor="salary" className="block p-2 font-semibold">Salary (if any)</label>
            <input type="text" id="salary" name="salary" className="block rounded bg-[#E4ECEE] w-full p-2 mb-4" />

            <button type="submit" className="w-full bg-[#629da3] text-white font-semibold py-2 rounded hover:bg-[#507a7d] transition duration-200">Submit</button>

            <div className="mt-4 text-center">{message}</div>
        </form>
    </div>

    <div className="flex-1 bg-white rounded-lg p-8">
        <div className="text-center mb-8">
            <h1 className="font-bold font-mono text-2xl">All Jobs</h1>
        </div>
        <div>
            <table>
                
            </table>
        </div>
    </div>
</div>

  );
}
