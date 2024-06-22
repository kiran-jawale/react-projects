import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useDom } from '../../../contexts/handleDom';
import axios from 'axios';

function LeftDiv() {
    const { selectedDoc, setLeftDivVisible, setDocs } = useDom();
    const [formData, setFormData] = useState({
        description: '',
        filetype: '',
        size: '',
    });

    useEffect(() => {
        if (selectedDoc) {
            setFormData({
                description: selectedDoc.description,
                filetype: selectedDoc.filetype,
                size: selectedDoc.size,
            });
        }
    }, [selectedDoc]);

    const handleClose = () => {
        setLeftDivVisible(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`/api/setdocs/${selectedDoc.id}`, formData)
            .then(response => {
                setDocs((prevDocs) => prevDocs.map(doc => (doc.id === selectedDoc.id ? response.data : doc)));
                handleClose();
            })
            .catch(error => console.error('Error updating document:', error));
    };

    return (
        <motion.div
            initial={{ left: '-100%' }}
            animate={{ left: 0 }}
            exit={{ left: '-100%' }}
            className="fixed top-0 left-0 z-[30] w-2/5 h-full bg-white p-8"
        >
            <button onClick={handleClose} className="absolute top-4 left-4">Close</button>
            <form onSubmit={handleSubmit}>
                <h4 className="mb-4">Edit Document</h4>
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
                    placeholder="Size"
                    value={formData.size}
                    onChange={handleChange}
                    className="mb-4 p-2 w-full"
                />
                <button type="submit" className="bg-blue-500 text-white p-2 w-full">Update Document</button>
            </form>
        </motion.div>
    );
}

export default LeftDiv;
