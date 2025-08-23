'use client'

import Image from 'next/image';
import Link from 'next/link';
import React, { Dispatch, SetStateAction } from 'react'

const Sidebar = ({ open, handleOpen }: { open: boolean, handleOpen: Dispatch<SetStateAction<boolean>> }) => {

    const handleLinkClick = () => {
        handleOpen(false);
    }

    return (
        <>
            <div className={`fixed w-11/12 h-screen top-0 right-0 z-40 bg-[#edf1f7] p-12 pt-16 flex flex-col font-light text-2xl ${open ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
                <Image
                    src="/icons/close.png"
                    alt="Close Icon"
                    width={38}
                    height={38}
                    className="ml-auto mb-6"
                    onClick={() => handleOpen(false)}
                />
                <Link href="/" className={`transition-all font-quicksand`} onClick={handleLinkClick}>Home</Link>
                <hr className='mt-1 mb-5' />
                <Link href="/about" className={`transition-all font-quicksand`} onClick={handleLinkClick}>About</Link>
                <hr className='mt-1 mb-5' />
                <Link href="/contact" className={`transition-all font-quicksand`} onClick={handleLinkClick}>Contact</Link>
                <hr className='mt-1 mb-5' />
                <Link
                    href="/amandazhang-resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all font-quicksand font-light"
                    onClick={handleLinkClick}
                >
                    Resume
                </Link>
            </div>
            <div className={`fixed inset-0 bg-black opacity-50 z-30 ${open ? 'block' : 'hidden'}`} onClick={() => handleOpen(false)}></div>
        </>
    )
}

export default Sidebar