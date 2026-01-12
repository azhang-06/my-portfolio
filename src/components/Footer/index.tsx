import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='flex flex-col items-center justify-center bg-lightblue py-4 px-4'>
            <h2 className='text-[20px] md:text-[24px] font-semibold font-montserrat text-onyx mb-2'>
                Looking forward to connecting!
            </h2>
            <div className='flex flex-col md:flex-row items-center gap-2 md:gap-5 font-quicksand text-[16px] md:text-[20px] text-onyx'>
                <p>
                    <span className='font-semibold'>Email me:</span> azhang.0302@gmail.com
                </p>
                <p>
                    <span className='font-semibold'>LinkedIn:</span>{' '}
                    <Link
                        href="https://www.linkedin.com/in/zhang-amanda"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='underline hover:text-black/70 transition-colors'
                    >
                        /zhang-amanda
                    </Link>
                </p>
            </div>
        </footer>
    )
}

export default Footer
