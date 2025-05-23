import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { IconLookup } from '@fortawesome/fontawesome-svg-core';
import Link from 'next/link';

interface IconFuncProps {
  icon_: IconDefinition;
  href_: string;
}

export default function IconFunc({icon_, href_}: IconFuncProps) {

    return (
        <Link href={href_} rel="noopener noreferrer" target="_blank">
        <FontAwesomeIcon icon={icon_} size="2x" className='mx-2 transition-transform duration-300 hover:scale-110 p-2'/>
        </Link>
    )
}