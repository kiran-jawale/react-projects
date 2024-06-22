import React from "react";
import { Link } from "react-router-dom";

const SectionA = () => {
  return (
    <section
      id="section1"
      className="h-screen w-full bg-gradient-to-r from-purple-500 to-pink-500"
    >
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Manage Your Tasks Efficiently.
              <span className="sm:block"> Boost Productivity. </span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
              Stay organized and focused with our task manager. Create,
              prioritize, and track your tasks with ease.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                to="/dashboard"
              >
                
                Create a Task
              </Link>
              <Link
                className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                to="/dashboard"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default SectionA;
