import React from 'react';

const SectionC = () => {
  return (
    <section id="section3" className="h-screen w-full bg-white flex ">
        <div className='w-1/2'></div>

      <div className="p-4 bg-gray-100 rounded w-1/2 shadow-md">
        <h2 className="text-2xl text-center m-1 w-full font-bold mb-4">What our users say</h2>
        <div className="flex flex-wrap ">
          <div className="w-full md:w-1/2 xl:w-1/3 p-4">
            <div className="bg-white rounded shadow-md p-4">
              <p className="text-lg">"My Tasks Set has been a game-changer for our team. We're more organized and productive than ever!"</p>
              <p className="text-sm text-gray-600">- John Doe, Team Lead</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-4">
            <div className="bg-white rounded shadow-md p-4">
              <p className="text-lg">"I was skeptical at first, but My Tasks Set has really helped me stay on top of my tasks and deadlines."</p>
              <p className="text-sm text-gray-600">- Jane Doe, Freelancer</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-4">
            <div className="bg-white rounded shadow-md p-4">
              <p className="text-lg">"My Tasks Set is so easy to use, even my team members who aren't tech-savvy can use it with ease."</p>
              <p className="text-sm text-gray-600">- Bob Smith, Project Manager</p>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default SectionC;