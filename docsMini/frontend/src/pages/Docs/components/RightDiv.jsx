import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useDom } from '../../../contexts/handleDom';
import axios from 'axios';

function RightDiv() {
    const { toggleRightDiv, setDocs } = useDom();
    const [formData, setFormData] = useState({
        description: '',
        filetype: '',
        size: '',
    });

    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/adddocs', formData)
            .then(response => {
                setDocs((prevDocs) => [...prevDocs, response.data]);
                toggleRightDiv();
            })
            .catch(error => console.error('Error adding document:', error));
    };

    return (
        <motion.div
            initial={{ right: '-100%' }}
            animate={{ right: 0 }}
            exit={{ right: '-100%' }}
            className="fixed top-0 right-0 z-[30] w-2/5 h-full bg-white p-8"
        >
            <button onClick={toggleRightDiv} className="absolute top-4 right-4">Close</button>
            <form onSubmit={handleSubmit}>
                <h4 className="mb-4">Add Document</h4>
                <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                    className="mb-4 p-2 w-full"
                />
                <select
                    name="filetype"
                    value={formData.filetype}
                    onChange={handleChange}
                    className="mb-4 p-2 w-full"
                >
                    <option value="">Select file type</option>
                    <option value="pdf">PDF</option>
                    <option value="txt">Text</option>
                    <option value="xlsx">Excel</option>
                    <option value="pptx">PowerPoint</option>
                    <option value="docx">Word</option>
                </select>
                <input
                    type="text"
                    name="size"
                    placeholder="Approx Size"
                    value={formData.size}
                    onChange={handleChange}
                    className="mb-4 p-2 w-full"
                />
                <button type="submit" className="bg-blue-500 text-white p-2 w-full">Add Document</button>
            </form>
        </motion.div>
    );
}

export default RightDiv;
