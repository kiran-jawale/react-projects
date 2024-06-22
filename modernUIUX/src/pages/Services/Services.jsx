import React from 'react';

const Services = () => {
  return (
    <section className="bg-primary text-white py-20">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-white mb-4">Our Services</h1>
        <p className="text-lg text-dimWhite mb-8">
          We offer a wide range of banking services to meet your financial needs.
        </p>
        <div className="flex flex-wrap justify-center mb-8">
          <div className="w-full md:w-1/2 xl:w-1/3 p-4">
            <div className="bg-white text-gray-400 rounded shadow-md p-4 feature-card">
              <h2 className="text-2xl text-gray-600 font-bold mb-2">Personal Banking</h2>
              <p className="text-lg mb-4">
                Our personal banking services include checking and savings accounts, credit cards, and loans.
              </p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Learn More
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-4">
            <div className="bg-white text-gray-400 rounded shadow-md p-4 feature-card">
              <h2 className="text-2xl text-gray-600 font-bold mb-2">Business Banking</h2>
              <p className="text-lg mb-4">
                Our business banking services include business checking and savings accounts, credit cards, and loans.
              </p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Learn More
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-4">
            <div className="bg-white text-gray-400 rounded shadow-md p-4 feature-card">
              <h2 className="text-2xl text-gray-600 font-bold mb-2">Investment Services</h2>
              <p className="text-lg mb-4">
                Our investment services include brokerage accounts, retirement accounts, and investment advice.
              </p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;