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
    <header className="flex justify-between items-center font-pt-sans p-[26px] pt-[70px] md:py-[24px] md:px-[32px] bg-lightblue shadow-lg overflow-x-hidden">
      <h2 className="font-bold text-lg">Logo</h2>
      <Image
        src="/icons/menu.png"
        alt="Menu Icon"
        width={32}
        height={32}
        className="block sm:hidden"
        onClick={() => setOpen(!open)}
      />
      <Sidebar open={open} handleOpen={setOpen} />
      <nav className="gap-[10px] hidden sm:flex">
        <Link href="/" className={`${router.pathname === '/' ? 'font-bold font-lg' : 'font-light'} p-[10px] transition-all hover:scale-[115%] font-quicksand`}>Home</Link>
        <Link href="/about" className={`${router.pathname === '/about' ? 'font-bold font-lg' : 'font-light'} p-[10px] transition-all hover:scale-[115%] font-quicksand`}>About</Link>
        <Link href="/contact" className={`${router.pathname === '/contact' ? 'font-bold font-lg' : 'font-light'} p-[10px] transition-all hover:scale-[115%] font-quicksand`}>Contact</Link>
      </nav>
    </header>
  );
};

export default Navbar;
