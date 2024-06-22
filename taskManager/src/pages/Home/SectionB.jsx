import React from 'react';
import { Link } from 'react-router-dom';

const SectionB = () => {
  return (
    <section id="section2" className="h-screen w-full bg-gray-100 flex justify-center items-center">
      <div className="max-w-lg p-4 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Features that make a difference</h2>
        <ul className="list-none mb-4">
          <li className="flex items-center mb-2">
            <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5 -3l2 2 4-4M9 9l2 2 4-4" />
            </svg>
            <span className="ml-2">Task Prioritization</span>
          </li>
          <li className="flex items-center mb-2">
            <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5 -3l2 2 4-4M9 9l2 2 4-4" />
            </svg>
            <span className="ml-2">Customizable Boards</span>
          </li>
          <li className="flex items-center mb-2">
            <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5 -3l2 2 4-4M9 9l2 2 4-4" />
            </svg>
            <span className="ml-2">Real-time Collaboration</span>
          </li>
        </ul>
        <Link to={'/dashboard'} className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Learn More</Link>
      </div>
    </section>
  );
};

export default SectionB;