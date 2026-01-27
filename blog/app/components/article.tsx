import { ExperienceLink } from "./link";

type ArticleProps = {
    key: any 
    id: string; 
    data?: any; 
}; 

export function Article(props: ArticleProps) {
    const months = ["January", "Febuary", "March", "April", "May", "June", "July", 
        "August", "September", "October", "November", "December"
    ]; 



    return(
        <div className="flex flex-row justify-between p-2 shadow-none hover:shadow dark:hover:shadow-none hover:shadow-lg group">
            <div className="flex flex-row">
                <p className="pr-2 text-nowrap">
                    {months[props.data.month - 1] + " " +
                    props.data.day + suffix(props.data.day) + ", " 
                    + props.data.year}
                </p>
                <p className="transition-all dark:group-hover:text-orange-400">
                    {props.data.title}
                </p>
            </div>

            <ExperienceLink url={props.data.link} />
        </div>
    )
}

function suffix(n: number) {
    if (n == 1) return "st"
    else if (n == 2) return "nd"
    else if (n == 3) return "rd"
    else return "th"
}