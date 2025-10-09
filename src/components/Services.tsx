import { useEffect, useState } from "react"
import SectionTitle from "../UI/SectionTitle";

interface DataInterface {
    id: number;
    title: string;
    img: string;
    desc: string;
}

const mockData: DataInterface[] = [
    {
        id: 1,
        title: "UX Research",
        img: "./phone.svg",
        desc: "New demos are continually added and buying a single license for Mak gives you access to all of what's shown below, plus everything that will be added in the future."
    },
    {
        id: 2,
        title: "Brand Design",
        img: "./play.svg",
        desc: "New demos are continually added and buying a single license for Mak gives you access to all of what's shown below, plus everything that will be added in the future."
    },
    {
        id: 3,
        title: "Web Development",
        img: "./layout.png",
        desc: "New demos are continually added and buying a single license for Mak gives you access to all of what's shown below, plus everything that will be added in the future."
    },
];

export default function Services() {
    const [data, setData] = useState<DataInterface[]>([]);

    useEffect(() => {
        setData(mockData);
    }, [])

    return (
        <section>
            <div className="container">
                <div className="max-w-[246px]" data-aos="fade-right">
                    <SectionTitle heading="What  actually I love to do">Services</SectionTitle>
                </div>

                <div className="flex items-center justify-between flex-wrap gap-[30px] mt-[50px]">
                    {
                        data.length ?
                            <>
                                {
                                    data.map((item, i) => (
                                        <div data-aos="fade-up" data-aos-delay={i * 150} key={item.id} className="flex flex-col gap-5 grow basis-[200px]">
                                            <div className="flex items-center gap-5">
                                                <div className="bg-[url(./Polygon.png)] bg-no-repeat bg-cover bg-center w-[62px] h-[62px] flex items-center justify-center">
                                                    <img src={item.img} alt={item.title} />
                                                </div>
                                                <h4 className="font-medium text-2xl break-all">{item.title}</h4>
                                            </div>
                                            <p className="text-[#47444E] leading-[32px]">{item.desc}</p>
                                        </div>
                                    ))
                                }
                            </> : <h4 className="font-medium text-xl break-all">There is no data yet!</h4>
                    }
                </div>
            </div>
        </section>
    )
}
