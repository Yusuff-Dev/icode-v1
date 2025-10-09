import React, { useEffect, useState } from "react";
import SectionTitle from "../UI/SectionTitle";
import blogs1 from '../assets/blogs1.png'

interface BlogsInterface {
  id: number | string,
  date: string,
  img: string,
  desc: string
}

const blogsData:BlogsInterface[] = [
  {
    id: 1,
    date: '20 June/2020',
    img: blogs1,
    desc: 'Technology is evolving rapidly. New devices and applications.'
  }
]

export default function Blog() {
  const [blogs, setBlogs] = useState<BlogsInterface[]>([]);

  useEffect(()=>{
    setBlogs(blogsData)
  }, [])

  useEffect(() => { }, [])
  return (
    <section className="mt-25">
      <div className="container">
        <div className="flex gap-[25px]">
          <div className="max-w-[165px]">
            <SectionTitle heading="Get News Feeds">Blog</SectionTitle>
          </div>
          <div className="flex ">
            {
              blogs?.map(blog=>(
                <div className="group w-[255px] h-[350px] cursor-pointer bg-white shadow hover:w-[350px] transition-all duration-500 origin-bottom">
                  <div className="w-full h-full group-hover:h-[233px] transition-all duration-200 object-cover">
                    <img src={blog.img} alt={blog.desc} className="w-full h-full object-cover"/>
                  </div>
                  {/* <div className="text-white absolute w-full h-full flex flex-col justify-end gap-[10px] bg-[url(./card-bg.png)] bg-cover group-hover:bg-white">
                    <p className="group-hover:text-purple-500 font-medium">{blog.date}</p>
                    <h4 className="group-hover:text-black text-xl font-bold leading-[100%]">{blog.desc}</h4>
                  </div> */}
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}
