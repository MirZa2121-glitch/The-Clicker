'use client';

import Link from "next/link";
import { useState } from "react";

const Header = function() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [projectsOpen, setProjectsOpen] = useState(false);

    const nav = [
        {
            id: 1,
            name: 'Projects',
            links: [
                { id: 1, name: 'Lights 💠', href: '/play' },
                { id: 2, name: 'The night', href: '/404' },
                { id: 3, name: 'Apatch', href: '/404' },
                { id: 4, name: 'Lumb', href: '/404' },
                { id: 5, name: 'Magic room', href: '/404' }
            ]
        },
        { id: 2, name: 'Blog', href: '/blog/' },
        { id: 3, name: 'The developer', href: '/developer/' },
        { id: 4, name: 'About Proj', href: '/' }
    ];

    return (
        <header className="w-full">
            <div className="mx-auto mt-3 flex w-full max-w-7xl flex-wrap items-center justify-between gap-2 rounded-3xl border border-gray-500 bg-white px-3 py-3 sm:mt-5 sm:flex-nowrap sm:rounded-[100px] sm:px-4 sm:py-4">
                <Link href="/" className="font-bold" aria-label="Lighter home">
                    LT
                </Link>

                <button
                    type="button"
                    className="flex min-h-11 min-w-11 items-center justify-center rounded border border-gray-300 text-xl sm:hidden"
                    aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={menuOpen}
                    aria-controls="main-navigation"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? '×' : '☰'}
                </button>

                <div className={`${menuOpen ? 'block' : 'hidden'} w-full sm:block sm:w-auto`}>
                    <nav id="main-navigation" aria-label="Main navigation">
                        <ul className="flex flex-col items-stretch gap-1 text-sm sm:flex-row sm:items-center sm:justify-end sm:gap-6 sm:text-base">
                            {nav.map((navigation) => (
                                <li key={navigation.id} className="relative">
                                    {navigation.links ? (
                                        <>
                                            <button
                                                type="button"
                                                className="flex min-h-11 w-full items-center justify-between gap-1 sm:w-auto sm:justify-start"
                                                aria-expanded={projectsOpen}
                                                aria-controls="projects-menu"
                                                onClick={() => setProjectsOpen(!projectsOpen)}
                                            >
                                                {navigation.name}
                                                <span aria-hidden="true">{projectsOpen ? '▲' : '▼'}</span>
                                            </button>
                                            {projectsOpen && (
                                                <ul
                                                    id="projects-menu"
                                                    className="z-10 min-w-36 rounded border border-gray-200 bg-white py-1 shadow sm:absolute sm:left-0 sm:top-full sm:mt-2"
                                                >
                                                    {navigation.links.map((link) => (
                                                        <li key={link.id}>
                                                            <Link
                                                                href={link.href}
                                                                className="block px-4 py-2 hover:bg-gray-100"
                                                                onClick={() => {
                                                                    setProjectsOpen(false);
                                                                    setMenuOpen(false);
                                                                }}
                                                            >
                                                                {link.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </>
                                    ) : (
                                        <Link
                                            href={navigation.href}
                                            className="flex min-h-11 items-center"
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            {navigation.name}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
