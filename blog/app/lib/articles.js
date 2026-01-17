import fs from 'fs'; 
import path from 'path'; 
import matter from 'gray-matter'; 

const artifactsDirectory = path.join(process.cwd(), 'articles'); 

function compareArticles(a, b) {
    if (a.data.year > b.data.year) return -1; 
    else if (a.data.year == b.data.year) {
        if (a.data.month > b.data.month) return -1; 
        else if (a.data.month == b.data.month) {
            if (a.data.day > b.data.day) return -1; 
            else if (a.data.day == b.data.day) {
                // resort to alphabetic sorting if both articles were published on the same day
                if (a.id < b.id) return -1; 
                else return 1; 
            }
            else return 1; 
        }
        else return 1;
    } else return 1; 
}

export function getAllArticlesData() {
    const articleNames = fs.readdirSync(artifactsDirectory)
      
    const allArticlesData = articleNames.map((articleName) => {
        // remove the ".md"
        const id = articleName.replace(/\.md$/, ''); 
    
        // create path for current artifact, read its contents
        const articlePath = path.join(process.cwd(), 'articles', articleName); 
        const articleContents = fs.readFileSync(articlePath, 'utf8'); 
    
        // get the metadata 
        const matterResult = matter(articleContents); 
    
        return {
          id, 
          ...matterResult, 
        }; 
    })

    // return two lists, one for experiences and one for projects 
    const sortedArticlesData = allArticlesData.sort(compareArticles);  

    return {
        articles: sortedArticlesData
    }
}