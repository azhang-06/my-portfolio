import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const About = () => {
    return (
        <main className="min-h-[calc(100vh-280px)] grid grid-cols-1 md:grid-cols-2 py-5 md:py-28 max-w-5xl mx-auto gap-4 px-4">
            <Head>
                <title>About — Amanda Zhang</title>
            </Head>
            <Image
                src="/amandaheadshot.jpg"
                alt="Amanda Zhang"
                width={500}
                height={700}
                className="mx-auto rounded-lg shadow-lg"
            />
            <div className="mt-8 md:ml-2">
                <h1 className="mb-4 font-semibold text-[32px] font-montserrat text-onyx">Hi, I&rsquo;m Amanda Zhang!</h1>
                <div className="text-[16px] md:text-[20px] font-quicksand text-onyx">
                    <p className="mb-5">
                        I&rsquo;m a UX designer based in Bowling Green, Kentucky, with a research-led practice. I like starting with interviews, surveys, and usability testing, then turning what I learn into prioritized features, user flows, and high-fidelity mobile screens.
                    </p>
                    <p className="mb-5">
                        I graduated from Western Kentucky University with a BFA in UX Design in May 2025. Since then I&rsquo;ve designed and shipped StreetFeast, a food truck discovery app on the App Store and Google Play, working directly with developers through handoff and iteration. I&rsquo;m open to roles in Nashville and remote.
                    </p>
                    <p className="mb-2">When I&rsquo;m not designing, I&rsquo;m probably:</p>
                    <ul className="mb-7">
                        <li>✈️ Traveling</li>
                        <li>🍜 Enjoying delicious food</li>
                        <li>🎞️ Watching shows</li>
                        <li>🐶 Hanging out with my dogs (a dachshund and a corgi + poodle mix)</li>
                    </ul>
                    <div className="flex gap-4">
                        <Link
                            href="/amandazhang-resume.pdf"
                            target="_blank"
                            className="border border-black rounded-full px-5 py-3 text-[16px] md:text-[20px] font-semibold font-quicksand hover:bg-black hover:text-white transition-colors"
                        >
                            Resume
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/zhang-amanda"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-black rounded-full px-5 py-3 text-[16px] md:text-[20px] font-semibold font-quicksand hover:bg-black hover:text-white transition-colors"
                        >
                            LinkedIn
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default About
