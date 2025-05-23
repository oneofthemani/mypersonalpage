'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faThreads } from '@fortawesome/free-brands-svg-icons';
import { faMedium } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import clsx from 'clsx';
import IconFunc from './icon';

const links = [
    {name: 'Home', href: '/'},
    {name: 'Resume', href: '/resume'},
    {name: 'Personal Projects', href: '/projects'},
    {name: 'Blogging', href: '/blog'},
    {name: 'Contact Me!', href: '/contact'},
]

export default function NavLinks() {
    const pathname = usePathname();

    return (
      <div className='px-3 py-4 md:px-2 justify-center'>
        <div>
          {links.map((link) => {
            {/*clsx is powerful */}
            return (
              <Link
                key={link.name}
                href={link.href}
                className='bg-sky-100 text-blue-600'  
              >
              <button className="hidden md:block transition-transform duration-300 hover:scale-110 rounded-md my-2">{link.name}</button>
              </Link>
            );
          })}
          </div>
          <div className="flex absolute bottom-0" >
            <IconFunc icon_={faInstagram} href_='https://www.instagram.com/1kaan_kocak' />
            <IconFunc icon_={faLinkedin} href_='https://www.linkedin.com/in/kocakkaan'/>
            <IconFunc icon_={faThreads} href_ = 'https://www.threads.com/@1kaan_kocak'/>
            <IconFunc icon_={faMedium} href_='https://medium.com/@kocakkaan123'/>
          </div>
      </div>
    );
  }

