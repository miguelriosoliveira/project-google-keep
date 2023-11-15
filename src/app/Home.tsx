import { GiHamburgerMenu } from 'react-icons/gi';
import { IoSearch } from 'react-icons/io5';
import { IoMdRefresh } from 'react-icons/io';
import { IoSettingsOutline } from 'react-icons/io5';
import Image from 'next/image';
import { Avatar } from '@/components';
import logo from '@/app/icon.svg';

export default function Home() {
  return (
    <header className="flex justify-between px-4 py-3 border-b border-b-slate-500">
      {
        <>
          <nav className="flex items-center gap-4">
            <GiHamburgerMenu size={24} />
            <Image src={logo} alt="Google Keep logo" width={24} height={24} />
            Keep
          </nav>

          <nav className="flex items-center gap-6">
            <IoSearch size={24} />
            <IoMdRefresh size={24} />
            <IoSettingsOutline size={24} />
            <picture>
              <Avatar
                src="https://github.com/miguelriosoliveira.png"
                alt="The user's avatar"
                width={32}
                height={32}
                className="rounded-full"
              />
            </picture>
          </nav>
        </>
      }
    </header>
  );
}
