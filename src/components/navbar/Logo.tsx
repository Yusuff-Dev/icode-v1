import { Link } from "react-router";

export default function Logo({ children }: { children: string }) {
    return (
        <Link to={'/'}>
            <div className="w-10 h-10 rounded-[50%_0_50%_50%] bg-purple-500 relative">
                <div className="bg-pink-500 w-6 h-6 rounded-[50%_0] absolute top-0 right-0"></div>
                <div className="absolute top-1/2 left-1/2 -translate-1/2 font-bold text-[30px] text-white font-[Montserrat]">{children}</div>
            </div>
        </Link>
    )
}
