import fs from 'fs'; 
import path from 'path'; 
import matter from 'gray-matter'; 

const artifactsDirectory = path.join(process.cwd(), 'artifacts'); 

function compareArtifacts(a, b) {
    const currentDate = new Date(); 
    let aTotal = 0, bTotal = 0;

    // give ongoing experiences / projects the "weight" of the current date 
    if (a.data.end_year === "present") 
        aTotal = 12 * currentDate.getFullYear() + currentDate.getMonth() + 1; 
    else 
        aTotal = 12 * parseInt(a.data.end_year) + parseInt(a.data.end_month); 

    if (b.data.end_year === "present") 
        bTotal = 12 * currentDate.getFullYear() + currentDate.getMonth() + 1;
    else 
        bTotal = 12 * parseInt(b.data.end_year) + parseInt(b.data.end_month); 
    
    if (aTotal > bTotal) return -1; 
    else if (aTotal == bTotal) {
        // resort to alphabetic sorting if both projects ended in the same month
        if (a < b) return -1; 
        else return 1; 
    }
    else return 1;
}

export function getAllArtifactsData() {
    const artifactNames = fs.readdirSync(artifactsDirectory)
      
    const allArtifactsData = artifactNames.map((artifactName) => {
        // remove the ".md"
        const id = artifactName.replace(/\.md$/, ''); 
    
        // create path for current artifact, read its contents
        const artifactPath = path.join(process.cwd(), 'artifacts', artifactName); 
        const artifactContents = fs.readFileSync(artifactPath, 'utf8'); 
    
        // get the metadata 
        const matterResult = matter(artifactContents); 
    
        return {
          id, 
          ...matterResult, 
        }; 
    })

    // return two lists, one for experiences and one for projects 
    const experiences = allArtifactsData.filter(
        (artifactData) => artifactData.data.experience); 

    const projects = allArtifactsData.filter(
        (artifactData) => !artifactData.data.experience); 

    // sort the lists according to most recent experiences by end date
    const sortedExperiences = experiences.sort(compareArtifacts); 
    const sortedProjects = projects.sort(compareArtifacts);  

    return {
        experiences: sortedExperiences, 
        projects: sortedProjects 
    }
}