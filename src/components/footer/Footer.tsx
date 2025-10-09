import { Link } from "react-router";

const links = [
    {
        id: 1,
        img: './Vector.png',
        link: '#',
    },
    {
        id: 2,
        img: './insta.png',
        link: '#',
    },
    {
        id: 3,
        img: './in.png',
        link: '#',
    },
]

export default function Footer() {
    return (
        <footer className="py-[50px]">
            <div className="container">
                <h2 data-aos="fade-up" data-aos-delay={100} className="text-center text-2xl sm:text-4xl font-medium">Let's be friends</h2>
                <div data-aos="fade-up" className="flex items-center justify-center gap-2 mt-[30px]">
                    {
                        links.map(link => (
                            <Link key={link.id} to={link.link} className="bg-[url('./Polygon.png')] bg-no-repeat bg-cover bg-center w-[50px] h-[50px] flex items-center justify-center">
                                <img src={link.img} alt={link.img} />
                            </Link>
                        ))
                    }
                </div>
            </div>
        </footer>
    )
}
