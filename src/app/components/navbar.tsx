import Link from "next/link";
import { RiMenu3Line } from "@remixicon/react";
const Navbar = () => {
    return (
        <>
            <div className="nav">
                <h1 className=""> {"<"}Huzaifa Nadeem /{">"} </h1>
                <div className="links">
                    <Link href={"/home"} className="nav-span">
                        Home
                    </Link>
                    <Link href={"/about"} className="nav-span">
                        About
                    </Link>
                    <Link href={"/"} className="nav-span">
                        Portfolio
                    </Link>
                    <Link href={"/contact"} className="nav-span">
                        Contact Me
                    </Link>
                </div>
                <button className="  ">Hire Me</button>
                <RiMenu3Line className="menu-icon"/>
            </div>
        </>
    )
}

export default Navbar;