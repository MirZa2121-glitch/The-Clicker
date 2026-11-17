'use client'

import * as motion from "motion/react-client"
import { useRef, useState } from "react"
import Link from "next/link";
import { Canvas, useFrame } from "@react-three/fiber"
import { Bounds, Center, useGLTF } from "@react-three/drei"
import type { Group } from "three"
import { Suspense } from "react"
import { useLanguage } from "../components/language";

function AtomModel() {
    const { scene } = useGLTF("/3D/atom.glb")
    const modelRef = useRef<Group>(null)

    useFrame((_, delta) => {
        if (modelRef.current) modelRef.current.rotation.y += delta * 0.5
    })

    return (
        <Bounds fit clip margin={1}>
            <group ref={modelRef}>
                <Center>
                    <primitive object={scene} />
                </Center>
            </group>
        </Bounds>
    )
}

export default function Game() {
    const [click, setClick] = useState(0)
    const { text } = useLanguage();

    const forBtnBack = [
        {id: 1, href: '/'}
    ]

    const theCount = function() {
        let increment = 1
        
        if (click >= 1000) {
            increment = 37
        } else if (click >= 450) {
            increment = 13
        } else if (click >= 300) {
            increment = 5
        } else if (click >= 150) {
            increment = 3
        } else if (click >= 50) {
            increment = 2
        }

        const nextClick = click + increment
        setClick(nextClick)

        if (click < 50 && nextClick >= 50) {
            setTimeout(() => {
                alert(text.doubled)
            }, 800)
        }

        if (click < 150 && nextClick >= 150) {
             setTimeout(() => {
                alert(text.tripled)
            }, 800)
        }

        if (click < 300 && nextClick >= 300) {
             setTimeout(() => {
                alert('Ultra COMBO 5x!!!')
            }, 800)
        }

        if (click < 450 && nextClick >= 450) {
            setTimeout(() => {
                alert('TRIPLE ULTRA HARD COMBO X13!!!!')
            }, 800)
        }

        if (click < 1000 && nextClick >= 1000) {
            setTimeout(() => {
                alert('MEGA ULTRA HARD GOD COMBO X37!!!!')
            }, 800)
        }

        if (click < 3000 && nextClick >= 3000) {
            setTimeout(() => {
                alert('GOD MODS ACTIVATED 🛡️ X67!!!!!')
            }, 800)
        }
    }

    const theResetClick = function() {
        setClick(0)
        alert(text.resetMessage)
    }

    return (
        <>
            <section className="">
                <div className="mx-auto w-full max-w-7xl px-3 sm:px-6 lg:px-4">
                    <div className="flex flex-wrap items-center justify-between gap-3 py-4 sm:py-5">
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 sm:gap-7">
                            {forBtnBack.map((items) => (
                                <Link key={items.id} href={items.href} className="text-2xl font-bold sm:text-3xl md:text-[35px]">{text.back}</Link>
                            ))}
                            <h2 className="text-2xl font-bold sm:text-3xl md:text-[35px]">{text.score}: {click}</h2>
                        </div>
                        <button onClick={theResetClick}
                        className="min-h-11 touch-manipulation px-2 text-2xl font-bold sm:text-3xl md:text-[35px]">
                            {text.reset}
                        </button>
                    </div>
                    <div className="flex">
                        <div className="mx-auto flex items-center justify-center">
                            <button
                                type="button"
                                onClick={theCount}
                                aria-label={`${text.tapButton} ${click}`}
                                className="flex touch-manipulation flex-col items-center justify-center gap-2 rounded-full p-2 text-5xl font-bold select-none sm:text-7xl md:text-[100px]"
                            >
                                <motion.div
                                whileHover={{scale: 1.2}}
                                whileTap={{scale: 0.8}}
                                style={{width: 'min(70vw, 550px, 55vh)', height: 'min(72vw, 550px, 55vh)'}}
                                animate={{
                                y: [0, -30, 0],
                                scale: [1, 1.1, 1],
                                }}
                                transition={{
                                duration: 3,
                                repeat: Infinity,
                                repeatType: 'reverse',
                                ease: 'easeInOut',
                                }}>
                                    <Canvas camera={{ position: [0, 0, 15] }}>
                                        <ambientLight intensity={3} />
                                        <directionalLight position={[1, 7, 3]} intensity={4} />
                                        <Suspense fallback={null}>
                                            <AtomModel />
                                        </Suspense>
                                    </Canvas>
                                </motion.div>
                                {click}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}