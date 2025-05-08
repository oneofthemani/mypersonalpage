'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
    {name: 'Home', href: '/'},
    {name: 'Personal Projects', href: '/projects'},
    {name: 'Blogging', href: '/blog'}
]

export default function NavLinks() {
    const pathname = usePathname();
  
    return (
      <>
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
      </>
    );
  }

