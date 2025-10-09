import { Link } from 'react-router'

export default function NotFound() {
  return (
    <div className='flex flex-col gap-10 h-screen items-center justify-center'>
    <h2 className='text-6xl font-bold capitalize'>page not found!</h2>
    <Link to={'/'} className='font-medium text-purple-500 text-xl underline'>Back to home</Link>
    </div>
  )
}
