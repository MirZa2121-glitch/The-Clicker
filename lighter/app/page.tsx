import Link from "next/link";
import Header from "./components/header";

export default function Home() {
  const nav_item = [
    {id: 1, name: 'Play', href: '/play'},
    {id: 2, name: 'Option', href: '/option'},
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
                  className="my-4 flex h-14 w-40 items-center justify-center border-y-2 text-center text-base sm:w-48 sm:text-lg"
                >
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
