import React, { useEffect } from 'react';
import axios from 'axios';
import Background from './components/Background';
import Foreground from './components/Foreground';
import { useDom } from '../../contexts/handleDom';

function Docs() {
    const { setDocs } = useDom();

    useEffect(() => {
        axios.get('/api/getdocs')
            .then(response => setDocs(response.data))
            .catch(error => console.error('Error fetching documents:', error));
    }, [setDocs]);

    return (
        <div className="relative w-full h-screen bg-zinc-800">
            <Background />
            <Foreground />
        </div>
    );
}

export default Docs;
