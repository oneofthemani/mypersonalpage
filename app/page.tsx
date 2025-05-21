'use client';

import Image from "next/image";
import { useState } from "react";
import NavLinks from "./ui/nav-links";

export default function Home() {

  const [darkModeOn, setDarkMode] = useState('');

  

  return (
    <>
    <div className="h-screen grid grid-cols-5">
        <div className="h-full">
          <NavLinks />
        </div>  
        <div className="grid col-span-4 content-between justify-center">
            <Image
              src="/assets/images/profile.jpg"
              width={200}
              height={200}
              alt="Picture of the creater of this blog, Kaan Koçak"
            />
            <p className="flex text-center text-sky-600">Hi everybody, here is Kaan! And I am here for blogging my entries one by one every day. 
              This place will be also one of my projects as I will be constantly improving here.
            </p>
            <p className="text-center font-bold">Bold text for me and you</p>
            <button className="w-16 bg-black items-center rounded-md text-sky-400 hover:text-sky-600 dark:bg-white dark:text-black">Hello I am </button>
        </div>
    </div>
    </>
  );
}
