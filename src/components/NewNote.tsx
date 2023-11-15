import { GrCheckboxSelected } from 'react-icons/gr';
import { HiMiniPaintBrush } from 'react-icons/hi2';
import { FaRegImage } from 'react-icons/fa6';

export function NewNote() {
  return (
    <div className="flex items-center border border-slate-500 rounded-md w-full px-4 py-2 gap-3 shadow-lg">
      <input placeholder="Take a note..." className="flex-1 placeholder:font-medium"></input>

      <div className="flex gap-6">
        <GrCheckboxSelected size={20} />
        <HiMiniPaintBrush size={20} />
        <FaRegImage size={20} />
      </div>
    </div>
  );
}
