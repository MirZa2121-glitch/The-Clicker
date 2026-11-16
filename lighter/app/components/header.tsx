'use client';

import Link from "next/link";
import { ModalWin, SettingWin } from "./modalWin";
import { useLanguage } from "./language";

const Header = function() {
    const { text } = useLanguage();

    return (
        <header className="w-full">
            <div className="mx-auto mt-3 flex w-full max-w-7xl items-center justify-between gap-2 px-3 py-3 sm:mt-5 sm:flex-nowrap sm:rounded-[100px] sm:px-4 sm:py-4">
                <Link href="/" className="font-bold text-[28px]" aria-label={text.home}>
                    LIGHTER 💠 
                </Link>

                <div>
                    <nav id="main-navigation" aria-label={text.navigation}>
                        <ul className="flex items-center gap-10">
                            <SettingWin/>
                            <ModalWin />
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
