
const NavIcon: React.FC<{ open: boolean; onClick: any }> = ({ open, onClick }) => {
    return (
        <button className="text-gray-500 w-6 h-6 relative focus:outline-none bg-transparent" onClick={onClick} >
            <div className="block w-6 absolute text-slate-400 hover:text-white left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span aria-hidden="true" className={`block absolute h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${!open && "-translate-y-1.5"} ${open && 'rotate-45'}`}></span>
                <span aria-hidden="true" className={`block absolute  h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${open && "opacity-0"}`}></span>
                <span aria-hidden="true" className={`block absolute  h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${open && '-rotate-45'} ${!open && "translate-y-1.5"}`}></span>
            </div >
        </button >
    )
}

export default NavIcon;