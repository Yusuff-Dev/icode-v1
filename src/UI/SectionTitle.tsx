export default function SectionTitle({ children, heading, w }: { children: string, heading: string, w: string }) {
    return (
        <div className="flex flex-col gap-[15px]">
            <p className="relative py-[10px] text-lg text-purple-500 after:absolute after:bottom-0 after:left-0 after:border after:w-[50px]">{children}
            </p>

            <h2 className={`font-bold text-4xl max-w-[${w}] text-black leading-[52px]`}>{heading}</h2>
        </div>
    )
}
