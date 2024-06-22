import React, { useContext } from "react";
import {ThemeContext} from '../../../contexts/themeContext'

function Background() {
  const {theme} = useContext(ThemeContext)
  return (
    <>
      <div id="bg" className={`absolute w-full h-full bg-zinc-800 z-0"`}>
        <div className="flex justify-center w-full py-10 text-zinc-500 text-xl   top-[5%] absolute font-semibold">Documents</div>
        <h1
          className="absolute top-1/2 left-1/2 text-[13vw] leading-none tracking-tighter
      -translate-x-[50%] -translate-y-[50%] font-semibold text-zinc-600"
        >
          Docs
        </h1>
      </div>
    </>
  );
}

export default Background;
