import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className=' flex flex-row mx-auto bg-slate-900'>
            <div className='mx-20'>
                <h1 className='text-5xl  text-zinc-50 font-semibold my-2 '>Hi I'm Vinesh</h1>
                <h3 className='text-xl text-lime-400 font-semibold '>An Aspiring Go Developer</h3>
                <p className='text-zinc-50 text-ellipsis my-5 leading-7 '>I am an aspiring Go developer passionate about clean code and efficient software solutions. My interest in Golang stems from its simplicity, performance, and robust concurrency support. I have enhanced my skills through personal projects, open-source contributions, and continuous learning from the Go community. With a strong foundation in computer science and a knack for problem-solving, I thrive in challenging environments that require optimizing performance and building reliable systems. Outside of coding, I enjoy exploring new technologies, participating in coding competitions, and sharing knowledge through blogging and community meetups. I look forward to collaborating on impactful projects.
  
                </p>

                <div className='flex justify-evenly text-2xl text-lime-400 my-5 z-auto transition-colors'>
                    <Link to={'/services'} className='inline-flex border-2 rounded-lg px-2 '>Hire Me</Link>
                    <Link to={'/contact'} className='inline-flex  border-2 rounded-lg px-2 '>Let's Talk</Link>
                </div>
            </div>
            <div className=' flex flex-col items-center '>
                <img src="/src/assets/developer.png" alt="image" className='size-9/10 mx-10'  />
            </div>
        </div>
    )
}

export default Hero