export default function Btn({children}:{children: string}) {
  return (
    <>
      <button className="bg-purple-500 border cursor-pointer py-[14px] px-[50px] rounded-full text-white font-medium text-2xl hover:text-purple-500 hover:bg-white transition-all ease-in">{children}</button>
    </>
  )
}
