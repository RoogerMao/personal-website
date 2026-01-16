import Link from 'next/link'
import Image from "next/image"
import { socials } from './socials'

const navItems = {
  '/': {
    name: 'home',
  },
  '/blog': {
    name: 'vault',
  },
  /*'/projects': {
    name: "projects",
  }*/ 
}

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-8 tracking-tight width-max">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row justify-between relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-orange-500 dark:hover:text-orange-400 flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </Link>
              )
            })}
          </div>
            
          <div className = "flex flex-row px-2 py-1">
            {socials.map((social) => (
              <a key = {social.link} href = {social.link} target = "_blank"
                className = "flex align-middle relative py-1 px-2">
                {social.icon()}
              </a>
              ))}
          </div>
        </nav>
      </div>
    </aside>
  )
}