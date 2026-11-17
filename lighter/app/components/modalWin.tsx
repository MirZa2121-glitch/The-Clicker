'use client';

import { useState } from "react";
import { useLanguage } from "./language";
import '../globals.css';

export function ModalWin() {
    const [isOpen, setIsOpen] = useState(false);
    const { text } = useLanguage();

    return (
        <>
            <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="hover:scale-[1.3] duration-150 cursor-pointer"
            >
                <img src='/assets/img/icon/info.svg' alt={text.information} className="w-10"/>
            </button>

            {isOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
                    onClick={() => setIsOpen(false)}
                >
                    <section
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="about-modal-title"
                        className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl"
                        onClick={(event) => event.stopPropagation()}
                    >

                        <div>
                            <h2 id="about-modal-title" className="mt-4 text-[35px] font-bold">
                            {text.aboutTitle}<abbr className="text-green-500">{text.brandSuffix}</abbr>
                            </h2>
                            <p className="text-[20px] font-bold py-2">{text.version}</p>
                            <p className="text-[25px] font-bold py-3">{text.hello}</p>
                            <p>{text.aboutText}</p>
                            <hr className="my-10"/>
                            
                            <div className="flex items-center justify-center gap-5">
                                <a 
                                className="flex items-center justify-baseline cursor-pointer w-45 h-13 border-2 rounded-[7px]"
                                href="https://github.com/MirZa2121-glitch">
                                    <img src='/assets/img/icon/github-icon.svg' alt="" className="w-13"/>
                                    <p className="text-[18px] font-normal">GitHub</p>
                                </a>
                                <a 
                                className="flex items-center justify-baseline cursor-pointer w-45 h-13 border-2 rounded-[7px]"
                                href="https://www.linkedin.com/in/mirza-seyidov-6277b6338/">
                                    <img src='/assets/img/icon/linkedin-icon.svg' alt="" className="w-10"/>
                                    <p className="text-[18px] font-normal pt-1">LinkedIn</p>
                                </a>
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            className="mt-10 rounded-lg bg-black px-4 py-2 text-white cursor-pointer"
                        >
                            {text.close}
                        </button>
                    </section>
                </div>
            )}
        </>
    );
}

export function SettingWin() {
    const [isOpen, setIsOpen] = useState(false);
    const { language, setLanguage, text } = useLanguage();
    const languages = [
        { code: "en", name: "English", flag: "/assets/img/icon/america-flag.svg" },
        { code: "ru", name: "Русский", flag: "/assets/img/icon/rus-flag.svg" },
        { code: "az", name: "Azərbaycan dili", flag: "/assets/img/icon/azeri-flag.svg" },
    ] as const;

    return (
        <>
            <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="hover:scale-[1.3] duration-150 cursor-pointer"
            >
                <img src='/assets/img/icon/setting.svg' alt={text.settings} className="w-10"/>
            </button>

            {isOpen && (
                <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
                onClick={() => setIsOpen(false)}
                >
                    <section
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="settings-modal-title"
                        className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl"
                        onClick={(event) => event.stopPropagation()}>

                        <div>
                            <h2 className="mt-4 text-[35px] font-bold">
                                <span id="settings-modal-title">{text.settings}</span>
                            </h2>
                            <p className="py-5 text-[18px]">{text.settingsMessage}</p>
                            <p className="mb-3">{text.language}</p>
                            <div className="flex flex-wrap gap-2">
                                {languages.map((item) => (
                                    <button
                                        key={item.code}
                                        type="button"
                                        onClick={() => setLanguage(item.code)}
                                        aria-pressed={language === item.code}
                                        className={`flex items-center gap-2 rounded-lg border px-4 py-2 ${
                                            language === item.code ? "border-black bg-gray-100" : "border-gray-300"
                                        }`}
                                    >
                                        <img src={item.flag} alt="" className="h-[21px] w-[35px]" />
                                        {item.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            className="mt-10 rounded-lg bg-black px-4 py-2 text-white cursor-pointer"
                        >
                            {text.close}
                        </button>
                    </section>
                </div>
            )}
        </>
    )
}