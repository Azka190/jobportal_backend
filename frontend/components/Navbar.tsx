import React from 'react'


function Navbar() {
    
  return (
    <div className='m-5 mx-[80px] flex justify-between '>
        <div>
            <div className='flex text-4xl font-extrabold'>
                <h1 className=''> <span className='text-black'>Job </span>Portal</h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-9 text-black text-2xl">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                </svg>
            </div>
            <div className='text-semibold pl-8'>
                Azka <span className='text-black'> Rehman</span>
            </div>
        </div>
        <div className='p-4 flex gap-3'>
           <a href="/login/page"> <button className='border-2 rounded px-5 py-1 hover:bg-black hover:border-black ease-in-out duration-300  '>Login</button></a>
            <a href="/registration/page"><button className='border-2 rounded px-5 py-1 hover:bg-black hover:border-black ease-in-out duration-300  '>Registration</button></a>
            
        </div>
    </div>
  )
}

export default Navbar