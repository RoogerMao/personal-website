import { BlogPosts } from 'app/components/posts'
import { Artifact } from './components/artifact'

export default function Page() {
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
        <div className="my-8">
          <BlogPosts />
        </div>
      </section>
      
      <section className = "mb-4">
        <h1 className="text-2xl font-semibold tracking-tighter mb-1">
            Experience
        </h1>

        <Artifact />
      </section>

      <section className = "mb-4">
        <h1 className="text-2xl font-semibold tracking-tighter mb-1">
            Projects
        </h1>
      </section>

      <section className = "mb-4">
        <h1 className="text-2xl font-semibold tracking-tighter">
            Vault
        </h1>
      </section>
    </div>
  )
}
