import React from "react";

function Help() {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="text-3xl font-bold mb-4">Help and Support</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
      </p>
      <h2 className="text-2xl font-bold mb-2">Frequently Asked Questions</h2>
      <ul>
        <li>
          <strong>Q: What is DOCS MINI?</strong>
          <p>A: DOCS MINI is a mini documents managing platform.</p>
        </li>
        <li>
          <strong>Q: How do I create a new document?</strong>
          <p>A: Click on the "📁" button and fill the form.</p>
        </li>
        <li>
          <strong>Q: Can I edit my documents?</strong>
          <p>A: Yes, you can edit your documents by clicking on the "✏️" button.</p>
        </li>
      </ul>
    </div>
  );
}

export default Help;