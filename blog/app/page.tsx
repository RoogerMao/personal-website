import { Artifact } from 'app/components/artifact'
import { Article } from 'app/components/article'
import { getAllArtifactsData } from 'app/lib/artifacts'
import { getAllArticlesData } from 'app/lib/articles' 
import fs from 'fs';
import path from 'path';

export async function getStaticProps() {
  // Debug: see what Vercel sees
  console.log('====== DEBUG INFO ======');
  console.log('process.cwd():', process.cwd());
  console.log('__dirname:', __dirname);
  
  // List root directory contents
  try {
    const rootContents = fs.readdirSync(process.cwd());
    console.log('Root directory contents:', rootContents);
  } catch (e) {
    console.error('Cannot read root:', e);
  }
  
  // Check if articles exists
  const articlesPath = path.join(process.cwd(), 'articles');
  console.log('Looking for articles at:', articlesPath);
  console.log('Articles exists?:', fs.existsSync(articlesPath));
  
  // If it exists, show contents
  if (fs.existsSync(articlesPath)) {
    const articles = fs.readdirSync(articlesPath);
    console.log('Articles found:', articles);
  }
  console.log('========================');
  
  // Your actual code here...
  const articlesDirectory = path.join(process.cwd(), 'articles');
  // ... rest of your code
}

export default async function Page() {
  // process all the markdown files containing the artifacts
  const { experiences, projects } = getAllArtifactsData();
  const { articles } = getAllArticlesData(); 

  console.log(articles); 

  return (
    <div className = "">
      <section>
        <div className="mb-1">
          <h1 className="text-2xl font-semibold tracking-tighter">
            Roger Mao
          </h1>
          <p className="text-xl tracking-tighter text-orange-500 dark:text-orange-400">
            APMA-CS @ Brown
          </p>
        </div>

        <p className="transition-all mb-4 hover:text-orange-500 dark:hover:text-orange-400 hover:shadow hover:shadow-orange-500 dark:hover:shadow-none rounded">
          {`BAIST Spring '26 Technical Reading Program Director.`}
        </p>
      </section>
      
      <section className = "mb-4">
        <h1 className="text-2xl font-semibold tracking-tighter mb-1">
            Experience
        </h1>

        {experiences.map((experience) => 
          <Artifact 
            key = {experience.id}
            id = {experience.id}
            content = {experience.content}
            data = {experience.data}
          />)}
      </section>

      <section className = "mb-4">
        <h1 className="text-2xl font-semibold tracking-tighter mb-1">
            Projects
        </h1>

        {projects.map((project) => 
          <Artifact 
            key = {project.id}
            id = {project.id}
            content = {project.content}
            data = {project.data}
          />)}
      </section>

      <section className = "mb-4">
        <h1 className="text-2xl mb-1 font-semibold tracking-tighter">
            Vault 
        </h1>
        <p className="transition-all mb-4 hover:text-orange-500 dark:hover:text-orange-400 hover:shadow hover:shadow-orange-500 dark:hover:shadow-none rounded">
          {`Recent notes from my Obsidian Publish.`}
        </p>


        {articles.map((article) => 
          <Article 
            key = {article.id}
            id = {article.id}
            data = {article.data}
        />)}
      </section>
    </div>
  )
}
