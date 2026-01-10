'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Sidebar from '../Sidebar';
import { useState } from 'react';

const Navbar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <header className="flex justify-between items-center p-[26px] pt-[30px] md:py-[24px] md:px-[52px] bg-lightblue shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] overflow-x-hidden">
      <Link href="/">
        <Image
          src="/logo/PersonalLogoVar.svg"
          alt="Amanda Zhang Logo"
          width={78}
          height={51}
          className="h-auto"
        />
      </Link>
      <Image
        src="/icons/menu.png"
        alt="Menu Icon"
        width={32}
        height={32}
        className="block sm:hidden cursor-pointer"
        onClick={() => setOpen(!open)}
      />
      <Sidebar open={open} handleOpen={setOpen} />
      <nav className="gap-[24px] hidden sm:flex items-center">
        <Link
          href="/"
          className={`${router.pathname === '/' ? 'font-bold text-[20px]' : 'font-medium text-[16px]'} p-[10px] transition-all hover:scale-105 font-quicksand text-onyx`}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`${router.pathname === '/about' ? 'font-bold text-[20px]' : 'font-medium text-[16px]'} p-[10px] transition-all hover:scale-105 font-quicksand text-onyx`}
        >
          About
        </Link>
        <Link
          href="/contact"
          className={`${router.pathname === '/contact' ? 'font-bold text-[20px]' : 'font-medium text-[16px]'} p-[10px] transition-all hover:scale-105 font-quicksand text-onyx`}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
