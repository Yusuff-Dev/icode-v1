import { Link } from "react-router";
import SectionTitle from "../UI/SectionTitle";
import { HiArrowSmallRight } from "react-icons/hi2";
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'

export default function Projects() {
  return (
    <section className="mt-25 pt-[50px] pb-[70px] bg-[url(./project-bg.svg)] bg-center backdrop-blur-[150px]">
      <div className="container">
        <div className="flex flex-wrap justify-between items-center">
          <div className="max-w-[204px]" data-aos="fade-right">
            <SectionTitle heading="All Creative Projects">Portfolio</SectionTitle>
          </div>
          <Link data-aos="fade-up" data-aos-delay={100} to="#" className="flex items-center gap-[10px] font-medium text-2xl text-black underline">
            Explore More
            <HiArrowSmallRight size={24} color="#8643DC"/>
          </Link>
        </div>

        <div className="flex items-center justify-between flex-wrap md:flex-nowrap gap-[30px] mt-[30px]">
          <div data-aos="zoom-in" data-aos-delay={100} className="grow">
            <img src={project1} alt="project 1" className="w-full h-full object-cover"/>
          </div>
          <div data-aos="zoom-in" data-aos-delay={200} className="grow">
            <img src={project2} alt="project 2" className="w-full h-full object-cover"/>
          </div>
        </div>

      </div>
    </section>
  )
}
