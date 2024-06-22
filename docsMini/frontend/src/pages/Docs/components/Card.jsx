import React from 'react';
import { motion } from 'framer-motion';
import { useDom } from '../../../contexts/handleDom';

const fileTypeColors = {
    pptx: 'bg-orange-600',
    xlsx: 'bg-green-600',
    docx: 'bg-blue-600',
    txt: 'bg-gray-600',
    pdf: 'bg-red-600',
};

function Card({ data, reference }) {
    const { editable,setSelectedDoc, toggleLeftDiv, toggleUpsideWindow } = useDom();

    const handleEdit = () => {
        setSelectedDoc(data);
        toggleLeftDiv(true);
    };

    const handleDelete = () => {
        setSelectedDoc(data);
        setUpsideWindowVisible(true);
    };

    return (
        <motion.div
            drag
            dragConstraints={reference}
            whileDrag={{ scale: 1.2 }}
            dragElastic={0.2}
            className="relative m-2 flex-shrink-0 w-44 h-56 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden"
        >
            
            <p className="text-xs leading-tight mt-5 font-semibold ">
                {data.description}
            </p>
            <div className="footer absolute bottom-0 w-full left-0">
                <div className="flex items-center justify-between px-8 py-3 mb-3">
                    <h5>{data.size}</h5>
                    <span className="w-7 h-7 bg-zinc-500 text-white rounded-full flex items-center justify-center">
                      {editable ? <h6 onClick={handleEdit}>E</h6> :<h6 onClick={handleDelete}>D</h6> }  
                        
                    </span>
                </div>
                <div className={`tag w-full py-4 ${fileTypeColors[data.filetype]} flex items-center h-10 justify-center`}>
                    <h3 className="text-sm font-semibold">{data.filetype}</h3>
                </div>
            </div>
        </motion.div>
    );
}

export default Card;
