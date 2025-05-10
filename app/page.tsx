'use client';

import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const [darkModeOn, setDarkMode] = useState('');

  function handleDarkMode() {
    if (darkModeOn == '') {
      setDarkMode('dark');
    }
    else {
      setDarkMode('');
    }
  }

  return (
    <div className={darkModeOn}>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] dark:bg-black dark:text-white">
        <Image
          src="/assets/images/profile.jpg"
          width={200}
          height={200}
          alt="Picture of the creater of this blog, Kaan Koçak"
        />
        <p className="text-sky-600">Hi everybody, here is Kaan! And I am here for blogging my entries one by one every day. 
          This place will be also one of my projects as I will be constantly improving here.
        </p>
        <p className="items-center font-bold">Bold text for me and you</p>
        <button className="bg-black items-center rounded-md text-sky-400 hover:text-sky-600 dark:bg-white dark:text-black" onClick={handleDarkMode}>Hello I am </button>
      </div>
    </div>
  );
}
