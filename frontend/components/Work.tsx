import React from 'react'

function Work() {
  return (
    <div className='font-mono m-10'>
        <div className="mb-8 pt-20">
            <h1 className="text-4xl font-extrabold flex justify-center ">How It Works</h1>
        </div>
        <div className='flex gap-32'>
            <div>
                <img src="/work.png" alt=""  className='bg-white rounded-full ml-32'/>
            </div>
            <div className=''>
                <div className='ml-20 mb-10 mt-16'>
                    <h1 className='text-2xl font-extrabold'>Create Your Profile</h1>
                    <p>Save time by filling out your application onces, allowing you to apply for thousands of postion all over the country.</p>
                </div>
                <div className='ml-20 mb-10'>
                    <h1 className='text-2xl font-extrabold'>Search Job and Compare Your Package</h1>
                    <p>Search and Compare assignments based on Education, Pay rate , job type to find the best assignment for you. </p>
                </div>
                <div className='ml-20 '>
                    <h1 className='text-2xl font-extrabold'>Find Your Next Assignment</h1>
                    <p>Once You Find your perfect Assignment simply submit your Application.The power is in your hand.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work