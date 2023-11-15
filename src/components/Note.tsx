import { BiBellPlus } from 'react-icons/bi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FaCircleCheck, FaRegImage } from 'react-icons/fa6';
import {
  MdOutlineArchive,
  MdOutlineColorLens,
  MdOutlinePersonAddAlt,
  MdOutlinePushPin,
} from 'react-icons/md';

const REVEAL_TRANSITION = 'opacity-0 group-hover:opacity-100 transition-opacity duration-500';

export function Note() {
  return (
    <div className="border border-slate-500 rounded-md w-full px-4 py-2 group text-sm">
      <FaCircleCheck
        size={20}
        className={`absolute -translate-x-5 -translate-y-4 ${REVEAL_TRANSITION}`}
      />

      <div className="flex mb-2">
        <p className="flex-1">a new note</p>

        <MdOutlinePushPin size={24} className={REVEAL_TRANSITION} />
      </div>

      <div className={`flex items-center gap-4 ${REVEAL_TRANSITION}`}>
        <BiBellPlus size={20} />
        <MdOutlinePersonAddAlt size={20} />
        <MdOutlineColorLens size={20} />
        <FaRegImage size={18} />
        <MdOutlineArchive size={21} />
        <BsThreeDotsVertical size={20} />
      </div>
    </div>
  );
}
