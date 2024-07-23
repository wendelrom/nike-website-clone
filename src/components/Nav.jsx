import { headerLogo } from '../assets/images'
import { logo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants'

const Nav = () => {
  return (
    <header className='padding-x absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container relative'>
            <a href="/" className='logo'>
                {/*width={139} means the width is set to 139px same with height in pixels*/}
                <img src={logo} alt="LOGO" width={139} height={29}/> 
            </a>
            <ul className="flex-1 flex justify-end gap-10 items-center max-lg:hidden nav-link">
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a href={item.href} className='relative list-item font-montserrat text-lg leading-normal text-slate-gray hover:text-orange-500'>
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="lg:hidden">
                <button type='button' className='btn'>
                    <img src={hamburger}  alt="hamburger"  width={25}/>
                </button>
            </div>
        </nav>
    </header>
  )
}

export default Nav