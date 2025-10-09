import { useEffect, useState } from "react";
import SectionTitle from "../UI/SectionTitle";
import blogs1 from "../assets/blogs1.png";
import blogs2 from "../assets/blogs2.png";
import blogs3 from "../assets/blogs3.png";

interface BlogsInterface {
  id: number | string;
  date: string;
  img: string;
  desc: string;
}

const blogsData: BlogsInterface[] = [
  {
    id: 1,
    date: "20 June/2020",
    img: blogs1,
    desc: "Technology is evolving rapidly. New devices and applications.",
  },

  {
    id: 2,
    date: "20 June/2020",
    img: blogs2,
    desc: "New devices and applications come to the market.",
  },

  {
    id: 3,
    date: "20 June/2020",
    img: blogs3,
    desc: "Every day providing solutions to problems.",
  },
];

export default function Blog() {
  const [blogs, setBlogs] = useState<BlogsInterface[]>([]);

  useEffect(() => {
    setBlogs(blogsData);
  }, []);

  useEffect(() => {}, []);
  return (
    <section className="mt-25">
      <div className="container">
        <div className="flex gap-[25px] flex-wrap">

          <div className="max-w-[165px]" data-aos="fade-up" data-aos-delay={200}>
            <SectionTitle heading="Get News Feeds">Blog</SectionTitle>
          </div>

          <div className="flex grow gap-10 flex-wrap">
            {blogs.length ? (
              blogs.map((blog) => (
                <div data-aos="zoom-in" data-aos-delay={+blog.id * 150} key={blog.id} className="group grow-1 cursor-pointer hover:grow-2 duration-200 h-[350px] basis-[255px] shrink-0 relative">
                  <div className="w-full h-full absolute group-hover:h-[233px] duration-200">
                    <img
                      src={blog.img}
                      alt={blog.desc}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute w-full h-full bg-[url(./card-bg.png)] group-hover:opacity-0 duration-200"></div>
                  <div className="absolute w-full h-full flex flex-col justify-end gap-[10px] py-[30px] px-5 group-hover:p-0 duration-200">
                    <p className="text-white group-hover:text-purple-500 duration-200">
                      {blog.date}
                    </p>
                    <h4 className="text-white group-hover:text-[#000] font-bold text-xl duration-200">
                      {blog.desc}
                    </h4>
                  </div>
                </div>
              ))
            ) : (
              <h4 data-aos="fade-up" data-aos-delay={100} className="text-xl text-black text-center">There is no data!</h4>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
