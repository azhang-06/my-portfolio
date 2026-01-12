'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import LoadingIndicator from '@/components/LoadingIndicator';

const Contact = () => {
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
    <main className="min-h-[calc(100vh-210px)] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-3xl flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12">
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
              id="name"
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
              id="email"
              name="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              className="bg-subtlebackground border-2 border-lightblue rounded px-3 py-2 text-[16px] font-quicksand font-medium text-[#616161] placeholder-[#616161] disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:border-lightblue/80"
            />

            <textarea
              id="message"
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
    </main>
  );
};

export default Contact;
