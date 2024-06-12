import React from 'react'

const Hero = () => {
    return (
        <div className='container mx-auto flex flex-col md:flex-row items-center bg-slate-900'>
            <div className=' md:w-1/2 px-20  '>
                <h1 className='text-5xl text-zinc-50 font-semibold '>Hi I'm Vinesh</h1>
                <h3 className='text-xl text-lime-400 font-semibold '>An Aspiring Go Developer</h3>
                <p className='text-zinc-50 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                <section className='flex justify-between text-2xl text-lime-400 mt-5 items-center  z-auto w-80 transition-colors'>
                    <button className='inline-flex border-2 rounded-lg bg-transparent  justify-center transition duration-300 ease-in-out bg-blue-300 text-black hover:bg-blue-500 hover:text-white px-4 py-1 '>Hire Me</button>
                    <button className='inline-flex  border-2 rounded-lg bg-transparent  justify-center tracking-wide px-4 py-1'>Let's Talk</button>
                </section>
            </div>
            <div className=' md:w-1/2 pl-5'>
                <img src="/src/assets/developer.png" alt="image" className='size-3/4' />
            </div>
        </div>
    )
}

export default Hero