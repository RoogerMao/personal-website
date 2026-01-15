"use client"
import { useState } from 'react'; 
import Image from "next/image"; 
import { marked } from 'marked';
import { ExperienceLink } from 'app/components/link';

type ArtifactProps = {
    id: string; 
    content?: string; 
    data?: any; 
}; 

export function Artifact({ id, content, data }: ArtifactProps) {
    const [isExpanded, setIsExpanded] = useState(false); 
    const months = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "June", "July", 
        "Aug.", "Sept.", "Oct.", "Nov.", "Dec."
    ]; 

    return (
        <div className="transition-all hover:shadow dark:hover:shadow-gray-300/30 p-2 cursor-pointer my-2 rounded group"
        onClick={() => setIsExpanded(!isExpanded)}>
            <div className="flex justify-between w-100">
                <div className="flex flex-row items-start">
                    <Image 
                    src = {data.logo} 
                    alt = {id} width = {30} height = {24}
                    className = "mr-2 object-scale-down rounded"/>


                    <div>
                        <h2 className = "text-xl group-hover:text-orange-500 dark:group-hover:text-orange-400">{data.title}
                            <span className = "pl-2 italic text-base">
                                {months[parseInt(data.start_month) - 1]} {data.start_year} – 
                                {" "}
                                {(data.end_year === "present") ? (data.end_year) :
                                    months[parseInt(data.end_month) - 1] + " " +  data.end_year
                                }
                            </span>
                        </h2>

                        {
                            isExpanded && 
                                <div className="transition-all pr-2 pt-2 pb-2"
                                dangerouslySetInnerHTML={{ __html: marked(content ? content : "") }} />
                        } 
                    </div>
                </div>

                {
                    <div>
                        {(data.link != null) && <ExperienceLink url={data.link} />} 
                    </div>
                }
            </div>
        </div>
    )
}