'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from 'next/link';


const NavBar1 = () => {
  const [darkMode, setDarkMode] = useState(false);
  
  // useEffect(() => {
  //   if (darkMode) {
  //     document.body.classList.add('dark');
  //   } else {
  //     document.body.classList.remove('dark');
  //   }
  //   localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  // }, [darkMode]);
  const router = useRouter();


  return (
    <>
      <nav className="sticky top-0 z-50 flex justify-around items-center 
                bg-[#f3f4f6] 
                dark:bg-gray-900
                py-3">
                  
        <div className="flex gap-6 items-center">
          <Image
            src="/images/logocerto.png"
            alt="logo"  
            width={150}
            height={60}
            onClick={() => router.push('/')}
          />

        </div>

        <div className="flex gap-4 items-center">
          <div className="flex gap-4 max-[850px]:hidden">
            <Link
              href="/"
              className="no-underline p-0 h-fit 
                 text-gray-900
                 dark:text-white 
                 hover:text-[#d9376e] 
                 hover:underline underline-offset-1"
            >
              Home
            </Link>


            <Link
              href="/Sobremim"
              className="no-underline p-0 h-fit 
                 text-gray-900
                 dark:text-white  
                 hover:text-[#d9376e]
                 hover:underline underline-offset-1"
            >
              Sobre Mim
            </Link>

            <Link
              href="/Habilidades"
              className="no-underline p-0 h-fit 
                 text-gray-900
                 dark:text-white 
                 hover:text-[#d9376e]
                 hover:underline underline-offset-1"
            >
              Habilidades
            </Link>

               <Link
              href="/Contato"
              className="no-underline p-0 h-fit 
                 text-gray-900
                 dark:text-white 
                 hover:text-[#d9376e]
                 hover:underline underline-offset-1"
            >
              Contato
            </Link>
           
          </div>
        </div>
      </nav>

          {/* <button className="fixed top-4 right-4 p-2 rounded bg-gray-200 dark:bg-gray-800 text-black dark:text-white z-50"
            onClick={() => {
              if (darkMode) {
              setDarkMode(false);
            }else {
              setDarkMode(true);
            }
            }}
          >{darkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
          </button> */}
    </>
  );
}
export default NavBar1;