import React from 'react';

const About = () => {
  return (
    <section className="bg-blue-gradient py-20">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-white mb-4">About Hoobank</h1>
        <p className="text-lg text-white mb-8">
          Hoobank is a leading financial institution that provides innovative banking solutions to individuals and businesses.
        </p>
        <div className="flex flex-wrap justify-center mb-8">
          <div className="w-full md:w-1/2 xl:w-1/3 p-4">
            <div className="bg-white rounded shadow-md p-4">
              <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
              <p className="text-lg mb-4">
                To provide exceptional banking services that exceed our customers' expectations.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-4">
            <div className="bg-white rounded shadow-md p-4">
              <h2 className="text-2xl font-bold mb-2">Our Vision</h2>
              <p className="text-lg mb-4">
                To be the leading financial institution in the region, known for our innovative solutions and exceptional customer service.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-4">
            <div className="bg-white rounded shadow-md p-4">
              <h2 className="text-2xl font-bold mb-2">Our Values</h2>
              <p className="text-lg mb-4">
                Integrity, Innovation, Customer-centricity, and Teamwork.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;