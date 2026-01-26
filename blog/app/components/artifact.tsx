"use client"
import { useState } from 'react'; 
import Image from "next/image"; 
import { marked } from 'marked';
import { ExperienceLink } from 'app/components/link';

type ArtifactProps = {
    key: any; 
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
        <div className="transition-text hover:shadow-lg dark:hover:shadow-none p-2 cursor-pointer my-2 rounded group"
        onClick={() => setIsExpanded(!isExpanded)}>
            <div className="flex justify-between w-100">
                <div className="flex items-start w-full">
                    {/* Logo */}
                    <Image 
                    src = {data.logo} 
                    alt = {id} width = {30} height = {24}
                    className = "mr-2 object-scale-down rounded flex-none"/>

                    {/* Main Body */}
                    <div className="grow min-w-0">
                        {/* Title, Date */}
                        <h2 className = "text-xl dark:group-hover:text-orange-400">{data.title}
                            <span className = "pl-2 italic text-base">
                                {months[parseInt(data.start_month) - 1]} {data.start_year} – 
                                {" "}
                                {(data.end_year === "present") ? (data.end_year) :
                                    months[parseInt(data.end_month) - 1] + " " +  data.end_year
                                }
                            </span>
                        </h2>

                        {/* Expanded Component */}
                        {
                            isExpanded && 
                                <div>
                                    {/* People (stored as array of two-element arrays), 
                                        first element is name, second is a link
                                        to their most relevant link
                                    */}
                                    {
                                        (data.people.length != 0) && 
                                        <p className = "mt-2 italic text-gray-600 dark:text-gray-300">Contributor(s):  
                                            {
                                                data.people.map((key: [string, string]) => 
                                                <a href={key[1]} key={key[1]} target = "_blank" className="transition-all hover:font-semibold hover:text-gray-700 dark:hover:text-gray-200">
                                                    {key[0]}
                                                </a>)
                                            }
                                        </p>
                                    }
                                    
                                    {/* Description */}
                                    <div className="transition-all pr-2 pt-2 pb-2"
                                    dangerouslySetInnerHTML={{ __html: marked.parse(content ? content : "") }} />
                        
                                {/* Frameworks, then languages */}
                                <div className="flex flex-wrap gap-2 my-2 text-base/8">
                                    {
                                        data.frameworks.map((key: string) => 
                                        <span key={key}
                                        className="inline-flex text-sm items-center outline-1 outline-orange-500 dark:outline-orange-400 w-fit px-2 rounded-full text-orange-500 dark:text-orange-400 whitespace-nowrap">
                                        {key}</span>)
                                    }

                                    {
                                        data.languages.map((key: string) => 
                                        <span 
                                        key = {key}
                                        className="transition-shadow inline-flex items-center text-sm outline-1 outline-gray-600 dark:outline-gray-300 w-fit px-2 rounded-full text-gray-600 dark:text-gray-300 whitespace-nowrap">
                                        {key}</span>)
                                    }
                                </div>
                            </div>
                        }
                    </div>
                </div>

                {/* Link */}
                {
                    <div>
                        {(data.link != null) && <ExperienceLink url={data.link} />} 
                        {(data.link == null) && <div className="size-7"/>}
                    </div>
                }
            </div>
        </div>
    )
}