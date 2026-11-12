'use client'

import * as motion from "motion/react-client"
import { useState } from "react"
import Link from "next/link";
import './css/about.css'

export default function Game() {
    const [click, setClick] = useState(0)

    const forBtnBack = [
        {id: 1, href: '/'}
    ]

    const theCount = function() {
        setClick((setPlusClick) => setPlusClick += 1)

        if (click === 49) {
            setTimeout(() => {
                alert('Doubled on x2!!!')
            }, 1000)
        }

        if (click === 150) {
             setTimeout(() => {
                alert('Tripled on x3!!!')
            }, 1000)
        }

        if (click > 49) {
            setClick((setDoubleClick) => setDoubleClick += 1)

        } else if (100 > 150) {
            setClick((setTripleClick) => setTripleClick += 2)
        }
    }

    const theResetClick = function() {
        setClick(0)
        alert('Reseted!')
    }

    return (
        <>
            <section className="">
                <div className="mx-auto w-full max-w-7xl px-3 sm:px-6 lg:px-4">
                    <div className="flex flex-wrap items-center justify-between gap-3 py-4 sm:py-5">
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 sm:gap-7">
                            {forBtnBack.map((items) => (
                                <Link key={items.id} href={items.href} className="text-2xl font-bold sm:text-3xl md:text-[35px]">Back</Link>
                            ))}
                            <h2 className="text-2xl font-bold sm:text-3xl md:text-[35px]">Score: {click}</h2>
                        </div>
                        <button onClick={theResetClick}
                        className="min-h-11 touch-manipulation px-2 text-2xl font-bold sm:text-3xl md:text-[35px]">
                            Reset
                        </button>
                    </div>
                    <div className="flex">
                        <div className="mx-auto flex items-center justify-center">
                            <button
                                type="button"
                                onClick={theCount}
                                aria-label={`Tap to increase score. Current score: ${click}`}
                                className="flex touch-manipulation flex-col items-center justify-center gap-2 rounded-full p-2 text-5xl font-bold select-none sm:text-7xl md:text-[100px]"
                            >
                                <motion.div
                                whileHover={{scale: 1.2}}
                                whileTap={{scale: 0.8}}
                                style={{width: 'min(72vw, 450px, 55vh)', height: 'min(72vw, 450px, 55vh)', borderRadius: '50%',
                                background: 'radial-gradient(circle at 30% 30%, red, gray)',
                                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)', animation: 'alternate'}}
                                animate={{
                                y: [0, -30, 0],
                                scale: [1, 1.1, 1],
                                }}
                                transition={{
                                duration: 3,
                                repeat: Infinity,
                                repeatType: 'reverse',
                                ease: 'easeInOut',
                                }}></motion.div>
                                {click}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}