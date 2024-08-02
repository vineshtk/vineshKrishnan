import React from 'react';
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <>
      <section className="bg-slate-900 mt-1  py-5 text-white">
        <div className="container px-6 py-11 mx-auto">
          <div className="text-center">
            {/* <p className="font-medium text-purple-400">Contact us</p> */}
            <h1 className="mt-2 text-2xl font-semibold md:text-3xl">
              Get in touch
            </h1>
            <p className="mt-3 text-gray-400">
              Our friendly team is always here to chat.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center justify-center text-center">
              <span className="p-3 text-slate-800 rounded-full bg-gray-300/80">
                <FaEnvelope className="w-6 h-6 " />
              </span>
              <h2 className="mt-4 text-lg font-medium text-gray-200">Email</h2>
              <p className="mt-2 text-gray-400">
                Our friendly team is here to help.
              </p>
              <Link to={'mailto:emailvtk@gmail.com'} className="mt-2 text-blue-900">emailvtk@gmail.com</Link>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
              <span className="p-3 text-slate-800 rounded-full bg-gray-300/80">
                <FaPhone className="w-6 h-6" />
              </span>
              <h2 className="mt-4 text-lg font-medium text-gray-200">Phone</h2>
              <p className="mt-2 text-gray-400">
                Mon-Fri from 8am to 5pm.
              </p>
              <Link to={'tel:+91 8547333143'} className="mt-2 text-blue-900">+91 8547333143</Link>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
              <span className="p-3 text-slate-800 rounded-full bg-gray-300/80">
                <FaLinkedin className="w-6 h-6" />
              </span>
              <h2 className="mt-4 text-lg font-medium text-gray-200">LinkedIn</h2>
              <p className="mt-2 text-gray-400">
                Follow me on linkedin.
              </p>
              <a href="https://www.linkedin.com/in/vinesh-tk/" target="_blank" rel="noopener noreferrer" className="mt-2 text-blue-900">linkedin/vineshtk</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
