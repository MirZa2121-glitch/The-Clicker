'use client';

import Link from "next/link";
import Header from "./components/header";
import { useLanguage } from "./components/language";
import './globals.css';

export default function Home() {
  const { text } = useLanguage();

  const nav_item = [
    {id: 1, IMG: '/assets/img/icon/play.svg', name: text.play, href: '/play'},
  ]

  return (
    <>
    <Header/>
      <main className="flex flex-1 items-center justify-center py-8 sm:py-12">
        <div className="w-full px-4 lg:max-w-7xl">
          <ul className="mx-auto w-fit">
            {nav_item.map((navs) => (
              <li key={navs.id}>
                <Link
                  href={navs.href}
                  className="my-4 flex h-14 w-40 items-center font-bold justify-baseline text-center text-[35px] sm:w-48 sm:text-[50px]"
                >
                  <img 
                  src={navs.IMG}
                  alt=""
                  className="w-20"/>
                  {navs.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
