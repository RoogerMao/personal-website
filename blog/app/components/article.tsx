type ArticleProps = {
    id: string; 
    data?: any; 
}; 

export function Article(props: ArticleProps) {
    const months = ["January", "Febuary", "March", "April", "May", "June", "July", 
        "August", "September", "October", "November", "December"
    ]; 



    return(
        <div className="flex flex-row p-2 shadow-none hover:shadow dark:hover:shadow-none hover:shadow-orange-500 rounded inset-ring-0 dark:hover:inset-ring-1 dark:hover:inset-ring-orange-400 group">
            <p className="italic text-gray-600 dark:text-gray-300 pr-2 text-nowrap group-hover:text-orange-500 dark:group-hover:text-orange-400">
                {months[props.data.month - 1] + " " +
                props.data.day + suffix(props.data.day) + ", " 
                + props.data.year}
            </p>
            <a href = {props.data.link} target = "_blank"
            className="transition-all hover:text-orange-500 dark:hover:text-orange-400">
                {props.data.title}
            </a>
        </div>
    )
}

function suffix(n: number) {
    if (n == 1) return "st"
    else if (n == 2) return "nd"
    else if (n == 3) return "rd"
    else return "th"
}