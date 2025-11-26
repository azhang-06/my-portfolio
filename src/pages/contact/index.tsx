'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import LoadingIndicator from '@/components/LoadingIndicator';

const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const isFormValid = firstName && lastName && email && message;

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
        // Form submitted successfully
        setFirstName('');
        setLastName('');
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
    <main className="min-h-[calc(100vh-280px)] flex flex-col items-center px-4 py-8">
      <div className="max-w-2xl text-center mt-12">
        <h2 className="text-[32px] font-semibold mb-4">Let’s collaborate, chat, and design together!</h2>
        <p className="mb-3 text-[20px] font-[400]">
          I’m always happy to hear from designers, developers, and curious people.
          Send a message and let’s talk research, design, or ideas!
        </p>
        <p className="text-[16px] font-[500]">Drop me a message below or connect with me on LinkedIn.</p>
      </div>

      <div className="bg-lightblue px-6 py-6 rounded-xl mt-10 max-w-3xl w-full shadow-lg">
        <form
          className="flex flex-col"
          onSubmit={handleSubmit}
        >
          {/* Honeypot */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="text" name="_honey" style={{ display: 'none' }} />
          {/* <input type="hidden" name="_next" value="https://www.amanda-zhang.com/" /> */}
          <input type="hidden" name="_subject" value="New Website Form Submission" />




          <label className="text-xl mb-1">Name</label>

          <div className="flex flex-col md:flex-row gap-4 mb-2">
            <div className="flex flex-col w-full">
              <input
                type="text"
                id="first-name"
                name="firstName"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                disabled={isLoading}
                className="rounded-md px-3 py-2 bg-white text-black disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <label htmlFor="first-name" className="text-sm mb-1 ml-1 !font-quicksand !font-light">First</label>
            </div>
            <div className="flex flex-col w-full">
              <input
                type="text"
                id="last-name"
                name="lastName"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                disabled={isLoading}
                className="rounded-md px-3 py-2 bg-white text-black disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <label htmlFor="last-name" className="text-sm mb-1 ml-1 !font-quicksand !font-light">Last</label>
            </div>
          </div>

          <div className="flex flex-col mb-2">
            <label htmlFor="email" className="text-xl mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              className="rounded-md px-3 py-2 bg-white text-black disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-xl mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={isLoading}
              className="rounded-md px-3 py-2 bg-white text-black h-40 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          <button
            type="submit"
            disabled={!isFormValid || isLoading}
            className={`mt-4 ml-auto bg-subtlebackground hover:bg-opacity-90 text-black font-medium py-2 px-4 rounded-md flex items-center gap-2 transition ${
              !isFormValid || isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isLoading ? (
              <>
                <LoadingIndicator size="sm" />
                <span className="font-quicksand font-light">Sending...</span>
              </>
            ) : (
              <>
                <span className="font-quicksand font-light">Send message</span>
                <Image src="/icons/send.png" alt="Send icon" width={20} height={20} />
              </>
            )}
          </button>
        </form>
      </div>
    </main>
  );
};

export default Contact;
