import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <main className="min-h-[calc(100vh-280px)] grid grid-cols-1 md:grid-cols-2 py-5 md:py-28 max-w-5xl mx-auto gap-4 px-2">
            <Image
                src="/amandaheadshot.jpg"
                alt="Amanda's Hero Image"
                width={500}
                height={700}
                className="mx-auto rounded-lg shadow-lg"
            />
            <div className="mt-8 ml-2">
                <h4 className="mb-4 font-medium text-[32px] font-pt-sans">Hi, I&rsquo;m Amanda Zhang!</h4>
                <div className='text-[20px'>
                    <p className="font-pt-sans-caption mb-7">
                        I&rsquo;m a UX designer based in Bowling Green, Kentucky. I specialize in UX research, and would love to expand my knowledge. My goal is to create solutions that prioritizes users first; focusing on finding out how users think and interact with a digital product.
                    </p>
                    <p>When I&rsquo;m not designing, I&rsquo;m probably:</p>
                    <p>✈️ Traveling</p>
                    <p>🍜 Enjoying delicious food</p>
                    <p>🎞️ Watching shows</p>
                    <p>🐶 Hanging out with my dogs (dachshund and corgi+poodle)</p>
                </div>
            </div>
        </main>
    )
}

export default About
