import { ExperienceLink } from "./link";

type ArticleProps = {
    key: any 
    id: string; 
    data?: any; 
}; 

export function Article(props: ArticleProps) {
    const months = ["Jan.", "Feb.", "March", "April", "May", "June", "July", 
        "Aug.", "Sept.", "Oct.", "Nov.", "Dec."
    ]; 



    return(
        <div className="flex flex-row justify-between p-2 shadow-none hover:shadow dark:hover:shadow-none hover:shadow-lg group">
            <div className="transition-text flex flex-row dark:group-hover:text-orange-400">
                <p>
                    {props.data.title}
                </p>
                <p className="italic pl-2 text-nowrap">
                    {months[props.data.month - 1] + " " +
                    props.data.day + suffix(props.data.day) + ", " 
                    + props.data.year}
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