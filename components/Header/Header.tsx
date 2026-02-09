"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import css from "./Header.module.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); 

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={css.header}>
      <Link href="/" className={css.logo}>
        <span className={css.spanLogo}>Anna</span>Malchevska
      </Link>

      <button className={css.burger} onClick={toggleMenu}>
        <span className={`${css.line} ${isOpen ? css.lineOpen : ""}`}></span>
        <span className={`${css.line} ${isOpen ? css.lineOpen : ""}`}></span>
        <span className={`${css.line} ${isOpen ? css.lineOpen : ""}`}></span>
      </button>

      <nav className={`${css.nav} ${isOpen ? css.navActive : ""}`}>
        <ul className={css.navigation}>
          <li 
            className={`${css.link} ${pathname === "/aboutMe" ? css.activeLink : ""}`} 
            onClick={() => setIsOpen(false)}
          >
            <Link href="/aboutMe">About me</Link>
          </li>
          
          <li 
            className={`${css.link} ${pathname === "/" ? css.activeLink : ""}`} 
            onClick={() => setIsOpen(false)}
          >
            <Link href="/projects">Projects</Link>
          </li>
          
          <li 
            className={`${css.link} ${pathname === "/Contacts" ? css.activeLink : ""}`} 
            onClick={() => setIsOpen(false)}
          >
            <Link href="/Contacts">Contacts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

