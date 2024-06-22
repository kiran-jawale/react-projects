import React, { useRef } from 'react';
import Card from './Card';
import { useDom } from '../../../contexts/handleDom';
import RightDiv from './RightDiv';
import LeftDiv from './LeftDiv';
import UpsideWindow from './UpsideWindow';

function Foreground() {
    const { docs, isRightDivVisible, isLeftDivVisible, isUpsideWindowVisible } = useDom();
    const ref = useRef(null);

    return (
        <div id='fg' ref={ref} className="relative top-0 left-0 z-10 w-full h-full p-5 flex flex-wrap">
            {docs.map((item,index) => (
                <li className='list-none' key={index}>   <Card  id={item.id} reference={ref} data={item} /></li>
             
            ))}
            {isRightDivVisible && <RightDiv />}
            {isLeftDivVisible && <LeftDiv />}
            {isUpsideWindowVisible && <UpsideWindow />}
        </div>
    );
}

export default Foreground;
