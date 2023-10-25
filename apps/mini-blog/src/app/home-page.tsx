import {usePosts} from "../hooks/usePosts";

export function HomePage() {

  const { posts, isLoading } = usePosts()

  if(isLoading) {
    return <div>Loading...</div>
  }

  if(!posts) {
    return <div>Something went wrong!</div>
  }

  if (!posts.length) {
    return <div>No posts found!</div>
  }

  if (posts) {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Top 10 the most expensive painting in the world</h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {posts.map((post: any) => (
              <div key={post.sys.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={post.fields.img.fields.file.url}
                    alt={post.fields.img.fields.title}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a
                        // href={product.href}
                      >
                        <span aria-hidden="true" className="absolute inset-0" />
                        {post.fields.title}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{post.fields.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
