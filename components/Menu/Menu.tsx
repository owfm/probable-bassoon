import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

import { menu } from '../../config'
import NavIcon from '../NavIcon/NavIcon'

const Menu: React.FC = () => {

    const router = useRouter()
    const [open, setOpen] = useState<boolean>(false);
    const [darkMode, setDarkMode] = useState<boolean>(false);

    const handleOpenSideBar = () => {
        setOpen(prev => !prev);
    }

    const handleToggleDarkMode = () => {
        darkMode ?
            document.documentElement.classList.remove('dark')
            : document.documentElement.classList.add('dark')
        setDarkMode(prev => !prev);
    }


    return (
        <>
            <header className='container flex flex-row justify-center align-baseline mb-10 stroke-slate-600 dark:stroke-slate-200'>
                <div className='flex align-middle justify-center mr-auto p-1 rounded-sm  display:default md:hidden hover:border-slate-700/90' >
                    <NavIcon open={open} onClick={handleOpenSideBar} />
                </div>
                <ul className='container flex-row align-middle justify-center hidden md:flex gap-2'>
                    {menu.map(item => <li className={`${router.route === item.route && "font-bold"} hover:font-bold text-grey-600 rounded-md  hover:text-white hover:bg-slate-300 dark:hover:bg-slate-600/50 dark:hover:text-slate-900 py-1 px-2`} key={item.display}><Link href={item.route}>{item.display}</Link></li>)}
                </ul>
                <button onClick={handleToggleDarkMode} className='ml-auto p-1 rounded-md text-slate-700 bg-slate-700/10 hover:bg-slate-700/30 border-2 border-transparent hover:border-slate-700/90 dark:hover:border-slate-200/90'>
                    {darkMode ? <svg className='h-5 w-5 stroke-inherit' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                        : <svg className='h-5 w-5 stroke-inherit' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>}
                </button>
            </header>

            <aside className={`absolute container transition-all -translate-x-full ${open && "transform-none"} top-16 md:hidden inset-0 pl-8`}>
                <ul className='flex flex-col'>
                    {
                        menu.map(m => <li className='text-slate-400 hover:text-white'><Link href={m.route}>{m.display}</Link></li>)
                    }
                </ul>
            </aside>
        </>

    )
}

export default Menu