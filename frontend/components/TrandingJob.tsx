import React from 'react'

function TrandingJob() {
  return (
    <div className="font-mono mb-10">
    <div className="mb-8">
        <h1 className="text-4xl font-extrabold flex justify-center ">Trending Technology</h1>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="text-center">
            <img src="/mobile.png" alt="Mobile Application" className="w-48 h-48 object-cover mx-auto mb-4" />
            <p className="text-lg font-semibold cursor-pointer hover:text-black hover-underline-animation ease-in-out">Mobile Application</p>
        </div>
        <div className="text-center">
            <img src="/frontend.png" alt="FrontEnd Developer" className="w-48 h-48 object-cover mx-auto mb-4" />
            <p className="text-lg font-semibold cursor-pointer  hover:text-black hover-underline-animation ease-in-out">FrontEnd Developer</p>
        </div>
        <div className="text-center">
            <img src="/backend.png" alt="Backend Developer" className="w-48 h-48 object-cover mx-auto mb-4" />
            <p className="text-lg font-semibold cursor-pointer  hover:text-black hover-underline-animation ease-in-out">Backend Developer</p>
        </div>
        <div className="text-center">
            <img src="/devOps.png" alt="DevOps" className="w-48 h-48 object-cover mx-auto mb-4" />
            <p className="text-lg font-semibold cursor-pointer  hover:text-black hover-underline-animation ease-in-out">DevOps</p>
        </div>
        <div className="text-center">
            <img src="/emerging-tech.png" alt="Emerging Technology and Roles" className="w-48 h-48 object-cover mx-auto mb-4" />
            <p className="text-lg font-semibold cursor-pointer  hover:text-black hover-underline-animation ease-in-out">Emerging Technology and Roles</p>
        </div>
        <div className="text-center">
            <img src="/analytics.png" alt="Analytics and Data Science" className="w-48 h-48 object-cover mx-auto mb-4" />
            <p className="text-lg font-semibold cursor-pointer  hover:text-black hover-underline-animation ease-in-out">Analytics and Data Science</p>
        </div>
    </div>
</div>


  )
}

export default TrandingJob