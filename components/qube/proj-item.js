import Image from "next/image";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

export function ProjItem({ title, date, src }) {
  const ref = useRef(null);

  useEffect(() => {
    // This function will be called every time your component re-renders
    if (ref.current) {
      // Adding the active class to trigger the transition
      ref.current.classList.add('active');
      // Force a reflow
      void ref.current.offsetHeight; // Read a property that triggers a reflow
    }
  });

  return (
    <motion.div ref={ref} className="w-[206.17px] h-[180.51px] flex-col justify-start items-start gap-px inline-flex "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="w-[206.17px] h-[144.51px] relative">
        <Image objectFit="cover" fill={true} className="rounded-lg" src={src} alt="project" />
      </div>
      <div className="flex-col justify-center items-start flex">
        <div className="text-black text-[15px] font-medium font-['Maven Pro']">{title} </div>
        <div className="text-black text-sm font-normal font-['Maven Pro'] leading-tight tracking-tight">{date}</div>
      </div>
    </motion.div>
  )
}

export function ItemGap() {
  return (<div className="w-[206.17px] h-[162px] relative" />)
}

export function ProjItemLong({ title, date, src }) {
  return (
    <div className="w-[206.17px] h-[460px] flex-col relative justify-start items-start gap-px inline-flex overflow-hidden">
      <div className="w-[206.17px] h-[308px] relative">
        <Image objectFit="cover" fill={true} className="rounded-lg" src={src} alt="project long" />
      </div>
      <div className="flex-col justify-center items-start flex">
        <div className="text-black text-[15px] font-semibold font-['Maven Pro']">{title} </div>
        <div className="text-black text-sm font-normal font-['Maven Pro'] leading-tight tracking-tight">{date}</div>
      </div>
    </div>);
}

export function FullList() {
  return (
    <div className="w-[150px] h-7 justify-start items-start gap-3 inline-flex">
      <div className="text-black text-[24px] font-normal font-['Maven Pro'] tracking-tight leading-7">FULL LIST</div>
      <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.33228 2.27686L19.0452 2.27685" stroke="black" stroke-width="2" stroke-linecap="round" />
        <path d="M19.0452 12.9898L19.0452 2.2769" stroke="black" stroke-width="2" stroke-linecap="round" />
        <path d="M1.11035 20.1317L18.9653 2.27682" stroke="black" stroke-width="2" stroke-linecap="round" />
      </svg>
    </div>
  )
}