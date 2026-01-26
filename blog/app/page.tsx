import { Artifact } from 'app/components/artifact'
import { Article } from 'app/components/article'
import { getAllArtifactsData } from 'app/lib/artifacts'
import { getAllArticlesData } from 'app/lib/articles' 

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

        <p className="transition-all mb-4 hover:text-orange-500 dark:hover:text-orange-400 rounded">
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
        <p className="transition-all mb-4 hover:text-orange-500 dark:hover:text-orange-400 rounded">
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
