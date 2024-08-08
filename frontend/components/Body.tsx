import React from 'react'

function Body() {
  return (
    <div className="flex items-center justify-between p-6">
    <div>
        <h1 className="text-6xl font-bold font-mono">Discover Your <span className='underline text-black'>Dream</span> Job Today.</h1>
        <p className='pt-10  font-mono' >Explore top Opportunities, compare offers, and start your dearm <br /> career with trusted agencies.</p>
       
        <div> 
            <h1 className='font-mono py-5 font-bold text-black '> Register Your Self For Better Future!</h1>
            <a href="/registration/page" className='border-2 rounded px-5 py-1 hover:bg-black hover:border-black ease-in-out duration-300 '><button>Start Now</button></a>
        </div>

        {/* <div className='flex gap-8 font-mono text-black py-10'>
            <p className='hover-underline-animation cursor-pointer'>Full Time</p>
            <p className='hover-underline-animation cursor-pointer'>Part Time</p>
            <p className='hover-underline-animation cursor-pointer'>Permanent</p>
            <p className='hover-underline-animation cursor-pointer'>Contract</p>
        </div> */}
    </div>
    <div>
        <img src="/02.png" alt="Job Search" className="w-[1000px] h-[700px]" />
    </div>
</div>

  )
}

export default Body