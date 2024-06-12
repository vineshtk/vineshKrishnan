import React from 'react'

const Navbar = () => {
    return (
        <>
            <header className='flex justify-between items-center z-auto bg-slate-900 px-20 py-5'>
                <a href="/" className='text-zinc-50 text-3xl font-bold'>VTK.</a>
                <nav>
                    <a className=' text-zinc-50 hover:text-lime-400 text-lg font-semibold ml-7' href="/">Home</a>
                    <a className=' text-zinc-50 hover:text-lime-400 text-lg font-semibold ml-7' href="/about">About</a>
                    <a className=' text-zinc-50 hover:text-lime-400 text-lg font-semibold ml-7' href="/services">Services</a>
                    <a className=' text-zinc-50 hover:text-lime-400 text-lg font-semibold ml-7' href="/portfolio">Portfolio</a>
                    <a className=' text-zinc-50 hover:text-lime-400 text-lg font-semibold ml-7' href="/contact">Contact</a>
                </nav>
            </header>
        </>
    )
}

export default Navbar