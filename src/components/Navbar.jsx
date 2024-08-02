import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <header className='flex justify-between items-center z-auto bg-slate-900 px-20 py-5'>
                <Link to="/" className='text-zinc-50 text-3xl font-bold'>VTK.</Link>
                <nav>
                    <Link className=' text-zinc-50 hover:text-lime-400 text-lg font-semibold ml-7' to="/">Home</Link>
                    <Link className=' text-zinc-50 hover:text-lime-400 text-lg font-semibold ml-7' to="/about">About</Link>
                    <Link className=' text-zinc-50 hover:text-lime-400 text-lg font-semibold ml-7' to="/services">Services</Link>
                    <Link className=' text-zinc-50 hover:text-lime-400 text-lg font-semibold ml-7' to="/portfolio">Portfolio</Link>
                    <Link className=' text-zinc-50 hover:text-lime-400 text-lg font-semibold ml-7' to="/contact">Contact</Link>
                </nav>
            </header>
        </>
    )
}

export default Navbar