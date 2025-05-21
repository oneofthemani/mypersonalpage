'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faThreads } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import clsx from 'clsx';
import IconFunc from './icon';

const links = [
    {name: 'Home', href: '/'},
    {name: 'Personal Projects', href: '/projects'},
    {name: 'Blogging', href: '/blog'}

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
              <p className="hidden md:block">{link.name}</p>
              </Link>
            );
          })}
          </div>
          <div className="flex absolute bottom-0" >
            <IconFunc icon_={faInstagram} />
            <IconFunc icon_={faLinkedin} />
            <IconFunc icon_={faThreads} />
          </div>
      </div>
    );
  }

