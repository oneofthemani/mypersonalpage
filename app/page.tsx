'use client';

import Image from "next/image";
import { useState } from "react";
import NavLinks from "./ui/nav-links";

export default function Home() {

  const [darkModeOn, setDarkMode] = useState('');

  

  return (
    <>
    <div className="h-screen grid grid-cols-4">
        {/*<div className="h-full">
          <NavLinks />
        </div>*/}  
        <div className="grid col-span-4 content-between justify-center">
            <p className="text-center font-bold">Bold text for me and you</p>
            {/*<button className="w-16 bg-black items-center rounded-md hover:text-sky-600 dark:bg-white dark:text-black">Hello I am </button>*/}
        </div>
    </div>
    </>
  );
}
