import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { DrinkStudio } from "../../public/data/DrinkStudio";
import { SunSketcher } from "../../public/data/SunSketcher";
import { StreetFeast } from "../../public/data/StreetFeast";
import { LeaderboardGolf } from "../../public/data/LeaderboardGolf";
import LoadingIndicator from "@/components/LoadingIndicator";

const projects = [StreetFeast, LeaderboardGolf, DrinkStudio, SunSketcher];

export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const isFormValid = name && email && message;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('https://formsubmit.co/azhang.0302@gmail.com', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setName('');
        setEmail('');
        setMessage('');
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="bg-offwhite">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-4 pt-12 pb-8 md:pt-20 md:pb-12">
        <h1 className="text-[32px] md:text-[44px] font-bold text-onyx font-montserrat">
          Hai! Hai!
        </h1>
        <p className="text-[72px] md:text-[152px] font-script italic text-onyx leading-tight">
          I&apos;m Amanda
        </p>
        <p className="max-w-[917px] text-center text-[20px] md:text-[32px] font-medium text-onyx font-montserrat mt-4 px-4">
          A UX designer who&apos;s curious and empathetic. I focus on mobile app designs and love figuring out what can be improved through research and design solutions.
        </p>
        <div className="flex gap-4 mt-8">
          <Link
            href="/about"
            className="border border-black rounded-full px-5 py-3 text-[16px] md:text-[20px] font-semibold font-quicksand hover:bg-black hover:text-white transition-colors"
          >
            More About Me
          </Link>
          <a
            href="#featured-projects"
            className="border border-black rounded-full px-5 py-3 text-[16px] md:text-[20px] font-semibold font-quicksand hover:bg-black hover:text-white transition-colors"
          >
            Featured Projects
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 px-4 py-12 md:py-16 max-w-5xl mx-auto">
        <div className="w-[280px] h-[280px] md:w-[400px] md:h-[400px] shrink-0">
          <Image
            src="/amanda-headshot.png"
            alt="Amanda Zhang"
            width={400}
            height={400}
            className="rounded-lg shadow-lg object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col gap-6 max-w-[464px]">
          <p className="text-[16px] md:text-[20px] font-quicksand text-onyx">
            I&apos;m a UX designer based in Bowling Green, Kentucky. I specialize in UX research, UX design for mobile applications, and would love to expand my knowledge. My goal is to create solutions that prioritizes users first; focusing on finding out how users think and interact with a digital product.
          </p>
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
      </section>

      {/* Featured Projects Section */}
      <section id="featured-projects" className="px-4 py-12 md:py-16 max-w-[1312px] mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-[24px] md:text-[32px] font-bold text-onyx font-montserrat whitespace-nowrap">
            Featured Projects
          </h2>
          <div className="flex-1 h-[1px] bg-black" />
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {projects.map((project) => (
            <Link href={`/projects/${project.slug}`} key={project.id} className="group">
              <article className="cursor-pointer">
                <div className="aspect-[638/564] relative rounded-lg overflow-hidden mb-4">
                  <Image
                    src={project.mainImage}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-2">
                  <p className="text-[14px] md:text-[16px] font-quicksand font-medium text-onyx mb-2">
                    {project.projectType} — {project.projectName}
                  </p>
                  <h3 className="text-[20px] md:text-[24px] font-semibold font-montserrat text-onyx mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[16px] md:text-[20px] font-quicksand text-onyx mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <p className="text-[14px] md:text-[16px] font-quicksand font-medium text-onyx">
                    {project.dateInformation.startDate} - {project.dateInformation.endDate} | Role: {project.role}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 py-12 md:py-16 max-w-[1312px] mx-auto">
        <div className="w-full h-[1px] bg-black mb-12" />
        <div className="w-full max-w-3xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12">
          {/* Left side - Text content */}
          <div className="lg:w-[400px]">
            <h2 className="text-[32px] font-bold font-montserrat text-onyx leading-tight mb-6">
              Let&apos;s collaborate, chat, and design together!
            </h2>
            <p className="text-[20px] font-quicksand font-normal text-onyx mb-4 leading-normal">
              I&apos;m always happy to hear from designers, developers, &amp; curious people. Let&apos;s talk research, design, or ideas!
            </p>
            <p className="text-[16px] font-quicksand font-medium text-onyx">
              Drop me a message or connect with me on Linkedin.
            </p>
          </div>

          {/* Right side - Form */}
          <div className="w-full lg:w-[340px]">
            <form
              className="flex flex-col gap-3"
              onSubmit={handleSubmit}
            >
              {/* Honeypot */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="text" name="_honey" style={{ display: 'none' }} />
              <input type="hidden" name="_subject" value="New Website Form Submission" />

              <input
                type="text"
                id="home-name"
                name="name"
                placeholder="Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={isLoading}
                className="bg-subtlebackground border-2 border-lightblue rounded px-3 py-2 text-[16px] font-quicksand font-medium text-[#616161] placeholder-[#616161] disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:border-lightblue/80"
              />

              <input
                type="email"
                id="home-email"
                name="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
                className="bg-subtlebackground border-2 border-lightblue rounded px-3 py-2 text-[16px] font-quicksand font-medium text-[#616161] placeholder-[#616161] disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:border-lightblue/80"
              />

              <textarea
                id="home-message"
                name="message"
                placeholder="Message..."
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={isLoading}
                className="bg-subtlebackground border-2 border-lightblue rounded px-3 py-2 text-[16px] font-quicksand font-medium text-[#616161] placeholder-[#616161] h-[140px] resize-none disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:border-lightblue/80"
              />

              <button
                type="submit"
                disabled={!isFormValid || isLoading}
                className={`mt-2 ml-auto bg-subtlebackground border-2 border-lightblue hover:bg-lightblue/30 text-onyx py-2 px-3 rounded-lg flex items-center gap-2 transition ${
                  !isFormValid || isLoading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isLoading ? (
                  <>
                    <LoadingIndicator size="sm" />
                    <span className="font-quicksand font-normal text-[20px]">Sending...</span>
                  </>
                ) : (
                  <>
                    <span className="font-quicksand font-normal text-[20px]">Send message</span>
                    <Image src="/icons/send.png" alt="Send icon" width={24} height={24} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
