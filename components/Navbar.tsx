import { NAV_LINKS } from "@/constans"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

const Navbar = () => {
  return (
    <nav className="     flexBetween  max-container
    padding-container relative z-30 py-5
    ">
        <Link  href={'/'}>
            <h1 className=" after:block after:w-1 after:h-1 after:absolute after:bottom-2 after:rounded-full after:-right-2 relative     after:bg-green-50 text-2xl  font-extrabold  text-[#262626] ">Hi<span className=" text-green-50">link</span></h1>
        </Link>
        <ul className="  hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link)=>{
            return <li key={link.key}>
<Link className=" transition-all  regular-16 flexCenter pb-1.5 cursor-pointer hover:text-gray-90 hover:font-bold text-gray-50" href={link.href}>{link.label}</Link>
            </li>
          })}
             </ul>
<div className=" lg:flexCenter hidden">
<Button type='button' title='Login' icon='/user.svg' variant='btn_dark_green'/>

</div>
<Image src={'menu.svg'} alt="menu" width={32} height={32} className="inline-block cursor-pointer lg:hidden"/>
             
    </nav>
  )
}

export default Navbar