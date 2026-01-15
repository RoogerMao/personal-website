export function ExperienceLink({url}) {
    return (<a href={url} className="">
        <svg width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor" className="dark:fill-white fill-black hover:stroke-orange-500 dark:hover:stroke-orange-400">
            <path d="M7 17L17 7M17 7H8M17 7V16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </a>)
}