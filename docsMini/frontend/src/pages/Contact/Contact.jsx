import React from "react";

function Contact() {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="text-3xl font-bold mb-4">Get in Touch</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
      </p>
      <form>
        <label className="block mb-2">
          Name:
          <input type="text" className="w-full p-2 pl-10 text-sm text-gray-700" />
        </label>
        <label className="block mb-2">
          Email:
          <input type="email" className="w-full p-2 pl-10 text-sm text-gray-700" />
        </label>
        <label className="block mb-2">
          Message:
          <textarea className="w-full p-2 pl-10 text-sm text-gray-700" />
        </label>
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;