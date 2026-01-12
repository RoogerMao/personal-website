import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <div className="mb-4">
        <h1 className="text-2xl font-semibold tracking-tighter">
          Roger Mao
        </h1>
        <p className="text-xl tracking-tighter text-orange-400">
          APMA-CS @ Brown '29 
        </p>
      </div>
      
      <p className="mb-4">
        {`BAIST Spring '26 Technical Reading Program Director.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
