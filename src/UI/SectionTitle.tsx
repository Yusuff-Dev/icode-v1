export default function SectionTitle({children}:{children: string}) {
  return (
    <div className="flex">
      <p className="relative py-[10px] text-lg text-purple-500 after:absolute after:bottom-0 after:left-0 after:border after:w-[50px]">{children}</p>
    </div>
  )
}
