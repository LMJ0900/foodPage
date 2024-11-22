
import Link from "next/link"
import logoImg from '@/assets/logo.png'
import Image from "next/image"
import classes from './mainHeader.module.css'
import MainHeaderBackground from '@/components/mainHeader/mainHeaderBackground';
import NavLink from "./navLink";

export default function MainHeader() {
    return(<>
    <MainHeaderBackground></MainHeaderBackground>
    <header className={classes.header}>
        <Link className={classes.logo} href="/">
        <Image src={logoImg} alt="접시위에 담긴 음식" priority></Image>
        NextLevel Food
        </Link>
        <nav className={classes.nav}>
            <ul>
                <li>
                    <NavLink href="/meals">Browse Meals</NavLink>
                </li>
                <li>
                   <NavLink href="/community">Foodies Community</NavLink>
                </li>
            </ul>
        </nav>
    </header>
    </>)
}