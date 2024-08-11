'use client';
import { useState, useEffect } from 'react';

export default function JobEntry() {
  const [message, setMessage] = useState(null);
  const [jobs, setJobs] = useState([]);

  const register = async (event) => {
    event.preventDefault();
    setMessage(null);

    const formData = new FormData(event.target);
    const jsonData = Object.fromEntries(formData);

    const token = localStorage.getItem('jwt');

    const reqOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
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
      fetchJobs(); // Refresh the job list after a successful entry
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  const fetchJobs = async () => {
    const token = localStorage.getItem('jwt');
    const reqOptions = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };

    try {
      const req = await fetch('http://127.0.0.1:1337/api/jobs', reqOptions);
      const res = await req.json();

      if (req.status === 200) {
        setJobs(res.data); // Assuming `res.data` contains the list of jobs
      } else {
        setMessage('Failed to fetch jobs.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

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

          <label htmlFor="Industry" className="block p-2 font-semibold">Industry</label>
          <select id="Industry" name="Industry" className="block rounded bg-[#E4ECEE] w-full p-2 mb-4" required>
            <option value="Business">Business</option>
            <option value="Banking">Banking</option>
            <option value="Education">Education</option>
            <option value="Telecommunication">Telecommunication</option>
            <option value="others">Others</option>
          </select>

          <label htmlFor="Salary" className="block p-2 font-semibold">Salary (if any)</label>
          <input type="text" id="Salary" name="Salary" className="block rounded bg-[#E4ECEE] w-full p-2 mb-4" />

          <button type="submit" className="w-full bg-[#629da3] text-white font-semibold py-2 rounded hover:bg-[#507a7d] transition duration-200">Submit</button>

          <div className="mt-4 text-center">{message}</div>
        </form>
      </div>

      <div className="flex-1 bg-white rounded-lg p-8">
        <div className="text-center mb-8">
          <h1 className="font-bold font-mono text-2xl">All Jobs</h1>
        </div>
        <div>
          <table className="w-full bg-[#E4ECEE] border border-gray-300 rounded-lg items-center">
            <thead>
              <tr className="bg-[#629da3] text-white">
                <th className="p-4">Job Title</th>
                <th className="p-4">Job Type</th>
                <th className="p-4">Education</th>
                <th className="p-4">Industry</th>
                <th className="p-4">Salary</th>
              </tr>
            </thead>
            <tbody>
              {jobs.length > 0 ? (
                jobs.map((job) => (
                  <tr key={job.id} className="items-center">
                    <td className="p-4">{job.attributes.jobtitle}</td>
                    <td className="p-4">{job.attributes.jobtype}</td>
                    <td className="p-4">{job.attributes.education}</td>
                    <td className="p-4">{job.attributes.Industry}</td>
                    <td className="p-4">{job.attributes.Salary}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="p-4 text-center">No jobs found.</td>
                </tr>
              )}
              
            </tbody>
            
          </table>
          <a href='/profile/page'><button  className="w-full bg-[#629da3] text-white font-semibold py-2 mt-4 rounded hover:bg-[#507a7d] transition duration-200">Go Back</button></a> 

        </div>
      </div>
    </div>
  );
}
