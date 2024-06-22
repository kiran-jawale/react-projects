import React from 'react';

const Contact = () => {
  return (
    <section className="bg-gray-gradient py-20">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-white mb-4">Get in Touch</h1>
        <p className="text-lg text-white mb-8">
          Have a question or need assistance? We're here to help.
        </p>
        <div className="flex flex-wrap justify-center mb-8">
          <div className="w-full md:w-1/2 xl:w-1/3 p-4">
            <div className="bg-white rounded shadow-md p-4">
              <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
              <p className="text-lg mb-4">
                <span className="text-blue-600">Phone:</span> +1 234 567 8900
              </p>
              <p className="text-lg mb-4">
                <span className="text-blue-600">Email:</span> [info@hoobank.com](mailto:info@hoobank.com)
              </p>
              <p className="text-lg mb-4">
                <span className="text-blue-600">Address:</span> 123 Main St, Anytown, USA
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-4">
            <div className="bg-white rounded shadow-md p-4">
              <h2 className="text-2xl font-bold mb-2">Social Media</h2>
              <p className="text-lg mb-4">
                Follow us on social media to stay up-to-date on the latest news and updates.
              </p>
              <ul className="flex justify-center mb-4">
                <li className="mr-4">
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li className="mr-4">
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li className="mr-4">
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;