import ProjectComponent from "@/components/Project";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { DrinkStudio } from "../../public/data/DrinkStudio";
import { SunSketcher } from "../../public/data/SunSketcher";

export default function Home() {

  return (
    <>
      <main className={`p-4 md:h-[calc(100vh-170px)] flex items-center justify-center max-w-5xl mx-auto gap-4`}>
        <div className="p-4 lg:p-0">
          <h4 className="mb-4 font-medium text-[24px] md:text-[48px] font-pt-sans">Hai! Hai! I’m Amanda.</h4>
          <p className="text-[16px] md:text-[36px] font-pt-sans-caption !font-[500]">A UX designer who’s curious and empathetic. I focus on mobile app designs and love figuring out what can be improved through research and design solutions.</p>
        </div>
        <div>
          <Image
            src="/amanda.png"
            alt="Amanda's Hero Image"
            width={1000}
            height={1300}
            className="rotate-5 hidden md:block"
          />
        </div>
      </main>
      <div className="flex flex-col gap-2 items-center justify-center md:mb-16">
        <hr className="h-1 w-11/12 text-[#616161] md:hidden" />
        <div className="flex justify-center items-center gap-2 my-4 ">
          <p className="text-[18.96px] md:text-[32px] text-center !font-[700]">Case Studies</p>
          <ChevronDownIcon className="w-10 h-10" />
        </div>
      </div>
      <ProjectComponent project={SunSketcher}/>
      <ProjectComponent project={DrinkStudio}/>
    </>
  );
}
