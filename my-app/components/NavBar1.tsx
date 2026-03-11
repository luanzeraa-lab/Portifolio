'use client';

import Image from 'next/image';
import Link from 'next/link';
import '../app/globals.css';
const NavBar1 = () => {
  return (
    <nav className="navbar">

      <Image
        src="/logo.png"
        alt="logo"
        width={120}
        height={40}
      />

      <div className="flex gap-6">

        <Link href="/" className="nav-link">
          Home
        </Link>

        <Link href="#sobre" className="nav-link">
          Sobre
        </Link>

        <Link href="#habilidades" className="nav-link">
          Habilidades
        </Link>

        <Link href="#contato" className="nav-link">
          Contato
        </Link>

      </div>

    </nav>
  );
};

export default NavBar1;