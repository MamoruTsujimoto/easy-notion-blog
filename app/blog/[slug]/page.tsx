import { redirect } from 'next/navigation'
import GoogleAnalytics from 'components/google-analytics'
import { getAllPosts, getPostBySlug, getAllBlocksByBlockId } from 'lib/notion/client'

import Single from 'components/layout/Single'

export const revalidate = 30

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((p) => ({ slug: p.Slug }))
}

const BlogSlugPage = async ({ params: { slug } }) => {
  const post = await getPostBySlug(slug)

  if (!post) {
    console.log(`Failed to find post for slug: ${slug}`)
    redirect('/blog')
  }

  const [blocks] = await Promise.all([getAllBlocksByBlockId(post.PageId)])

  return (
    <>
      <GoogleAnalytics pageTitle={post.Title} />
      <Single post={post} blocks={blocks} />
    </>
  )
}

export default BlogSlugPage
