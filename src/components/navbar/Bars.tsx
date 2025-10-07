import { useState } from "react";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";

export default function Bars() {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    return (
        <div 
        onClick={()=>setIsOpen(!isOpen)}
        className="flex items-center justify-center flex-col gap-2 w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] rounded-full shadow-md cursor-pointer bg-white">
            {
                isOpen ? <IoCloseOutline size={32} color="#25202F"/> :  <IoMenuOutline size={32} color="#25202F"/>
            }
        </div>
    )
}
