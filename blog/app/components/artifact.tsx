"use client"
import { useState } from 'react'; 

export function Artifact({ id: string, content, data}) {
const [isExpanded, setIsExpanded] = useState(false); 

    return (
        <div className="w-100 bg-gray-900 cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
            <h1>{data.title}</h1>

            {
                isExpanded && 
                <div>
                    <h2>This is only shown when expanded.</h2>
                </div>
            }
        </div>
    )
}