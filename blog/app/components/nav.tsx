import Link from 'next/link'
import Image from "next/image"

const navItems = {
  '/': {
    name: 'home',
  },
  '/blog': {
    name: 'blog',
  },
}

const socials = [
  [
    "https://www.linkedin.com/in/roger-mao-24baa0397/",
    "/socials/linkedin_icon.svg", 
    "LinkedIn"
  ], 
  [
    "mailto:roger_mao@brown.edu",
    "/socials/email_icon.svg", 
    "Email"
  ], 
  [
    "https://github.com/RoogerMao", 
    "/socials/github_icon.svg", 
    "GitHub"
  ]
]

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight bg-blue-900 width-max">
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
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </Link>
              )
            })}
          </div>
            
          <div className = "flex flex-row pr-10">
            {socials.map(([link, svg, alt]) => (
              <a key = {link} href = {link} target = "_blank"
                className = "flex align-middle relative py-1 px-2">
                <Image
                  src = {svg} 
                  alt = {alt}
                  width = {30}
                  height = {30}
                />
              </a>
              ))}
          </div>
        </nav>
      </div>
    </aside>
  )
}