import userImage from '../assets/user.png'
import Btn from '../UI/Btn'

export default function Hero() {
    return (
        <header className='md:py-16'>
            <div className="container">
                <div className='flex flex-col-reverse md:flex-row md:items-center gap-y-10 gap-x-2 justify-between'>

                    <div className="flex flex-col gap-2 sm:gap-5">
                        <h1 className="text-4xl sm:text-6xl font-bold leading-[120%]"><p className="text-xl sm:text-2xl font-medium text-[#666]">Hello,</p> Adam Zakob</h1>
                        <p className="text-xl sm:text-2xl text-[#25202F]">a freelance UX Designer</p>

                        <div className='mt-6 md:mt-12 lg:mt-16'>
                            <Btn>Let’s Talk</Btn>
                        </div>
                    </div>

                    <div className='lg:pr-[77px] flex justify-center md:justify-end'>
                        <div className='max-w-[535px]'>
                            <img src={userImage} alt="user image" loading='lazy' />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
