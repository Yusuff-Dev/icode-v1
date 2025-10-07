import { NavLink } from 'react-router';



const links = [
    {
        url: '/',
        name: "about"
    },

    {
        url: '/services',
        name: "services"
    },

    {
        url: '/works',
        name: "works"
    },

    {
        url: '/blog',
        name: "blog"
    },
]

export default function Links() {
  return (
    <div className='flex items-center gap-2 capitalize'>
        {
            links.map(link=>(
                <NavLink key={link.name} to={link.url} className={({isActive})=>(isActive ? 'font-medium text-xl' : 'font-medium text-xl opacity-50')}>{link.name}</NavLink>
            ))
        }
    </div>
  )
}
