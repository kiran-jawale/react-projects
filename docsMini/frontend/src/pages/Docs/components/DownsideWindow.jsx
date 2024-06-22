import React from 'react';
import { motion } from 'framer-motion';
import { useDom } from '../../../contexts/handleDom';
import axios from 'axios';

function DownsideWindow() {
    const { selectedDoc, setDownsideWindowVisible } = useDom();

    const handleConfirmDownload = async () => {
        try {
            const response = await axios.get(`/api/getjson/${selectedDoc.id}`);
            const jsonData = response.data;

            // Attempt to download JSON data
            const blob = new Blob([JSON.stringify(jsonData)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${selectedDoc.description}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);

            setDownsideWindowVisible(false);
        } catch (error) {
            console.error('Error confirming download:', error);
        }
    };

    const handleCancelDownload = () => {
        setDownsideWindowVisible(false);
    };

    return (
        <motion.div
            initial={{ bottom: '-100%' }}
            animate={{ bottom: 0 }}
            exit={{ bottom: '-100%' }}
            className="fixed bottom-0 left-0 z-[30] w-full h-1/3 bg-white p-8"
        >
            <div className="rounded-2xl border border-blue-100 bg-white p-4 shadow-lg sm:p-6 lg:p-8" role="alert">
                <div className="flex items-center gap-4">
                    <span className="shrink-0 rounded-full bg-blue-400 p-2 text-white">
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path clipRule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" fillRule="evenodd" />
                        </svg>
                    </span>
                    <p className="font-medium sm:text-lg">Confirm Download?</p>
                </div>
                <p className="mt-4 text-gray-500">{`Do you want to download ${selectedDoc.description}.json?`}</p>
                <div className="mt-6 sm:flex sm:gap-4">
                    <button onClick={handleConfirmDownload} className="inline-block w-full rounded-lg bg-blue-500 px-5 py-3 text-center text-sm font-semibold text-white sm:w-auto">Confirm</button>
                    <button onClick={handleCancelDownload} className="mt-2 inline-block w-full rounded-lg bg-gray-50 px-5 py-3 text-center text-sm font-semibold text-gray-500 sm:mt-0 sm:w-auto">Cancel</button>
                </div>
            </div>
        </motion.div>
    );
}

export default DownsideWindow;
