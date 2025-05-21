import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { IconLookup } from '@fortawesome/fontawesome-svg-core';

interface IconFuncProps {
  icon_: IconDefinition;
}

export default function IconFunc({icon_}: IconFuncProps) {

    return (
        <FontAwesomeIcon icon={icon_} size="2x" className='mx-2 transition-transform duration-300 hover:scale-110 p-2' />
    )
}