'use client';
import { useState, useEffect } from 'react';

export default function JobEntry(props ) {
 

  return (
    <div className="bg-[#629da3] flex gap-9 min-h-screen p-6 text-black">
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
            {props.jobs.data.map((item) => {
        return(
                <tr className='items-center '>
                    <td className="p-4">{item.attributes.jobtitle}</td>
                    <td className="p-4">{item.attributes.jobtype}</td>
                    <td className="p-4">{item.attributes.education}</td>
                    <td className="p-4">{item.attributes.Industry}</td>
                    <td className="p-4">{item.attributes.Salary}</td>
                </tr>
                )})}
            </tbody>
        </table>
         
        </div>
    </div>
</div>


  );
}
export async function getServerSideProps(context) {
    let headers = {Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImlhdCI6MTcyMjkyNzkzMCwiZXhwIjoxNzI1NTE5OTMwfQ.DNDKhrWsKtw4zF7sGXuFczWv-B3ZM6qyTxB-9nXIu2E"}
    let a = await fetch("http://localhost:1337/api/jobs", {headers : headers})
    let jobs = await a.json()
    return{
      props:{ jobs : jobs},
    }
  }