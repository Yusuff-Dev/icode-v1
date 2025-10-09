import { Link } from "react-router";
import SectionTitle from "../UI/SectionTitle";
import Btn from "../UI/Btn";
import { GrAttachment } from "react-icons/gr";
import { GoArrowRight } from "react-icons/go";

export default function Contact() {
  return (
    <section className="mt-25">
      <div className="container">
        <div className="flex justify-between flex-wrap">
          <div className="max-w-[515px] !font-[roboto] font-medium">
            <SectionTitle heading="Let me know if you want to talk about a potential collaboration. I'm available for freelance work.">
              Contact me
            </SectionTitle>
          </div>

          <div className="mt-25 font-[roboto] text-2xl text-purple-500">
            <Link to={'email:infoname@mail.com'}>infoname@mail.com</Link>
          </div>
        </div>

        <div className="mt-[50px]">
          <form className="flex flex-col items-start gap-7">
            <input type="text" placeholder="What's your name?" className="border-b border-[#DAD2E3] py-[17px] w-full" />
            <input type="text" placeholder="Your email" className="border-b border-[#DAD2E3] py-[17px] w-full" />
            <input type="text" placeholder="Tell me about your project" className="border-b border-[#DAD2E3] py-[17px] w-full" />
            <div className="flex justify-between mt-[2px] w-full items-start flex-wrap">
              <Btn>Get a quote</Btn>
              <div className="flex items-center gap-5">
                <div className="relative">
                  <input type="file" className="w-[30px] h-[30px] opacity-0" />
                  <GrAttachment className="absolute top-1/2 left-1/2 -translate-1/2 text-[#637085] pointer-events-none text-xl"/>
                </div>
                  <GoArrowRight className="text-purple-500 text-xl"/>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
