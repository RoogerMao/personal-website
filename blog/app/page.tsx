import fs from 'fs'; 
import path from 'path'; 
import matter from 'gray-matter'; 

import { BlogPosts } from 'app/components/posts'
import { Artifact } from 'app/components/artifact'
import { getAllArtifactsData } from 'app/lib/artifacts'

export default async function Page() {
  // process all the markdown files containing the artifacts
  const { experiences, projects } = getAllArtifactsData();
  console.log(experiences);
  console.log(projects); 

  return (
    <div>
      <section>
        <div className="mb-4">
          <h1 className="text-2xl font-semibold tracking-tighter">
            Roger Mao
          </h1>
          <p className="text-xl tracking-tighter text-orange-400">
            APMA-CS @ Brown
          </p>
        </div>
        
        <p className="mb-4">
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
        <h1 className="text-2xl font-semibold tracking-tighter">
            Vault
        </h1>
      </section>
    </div>
  )
}
