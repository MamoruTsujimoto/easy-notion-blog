import { NUMBER_OF_POSTS_PER_PAGE } from 'app/server-constants'
import { NoContents } from 'components/blog-parts'
import Wrapper from 'components/base/Wrapper'
import { getPosts, getFirstPost } from 'lib/notion/client'

export const revalidate = 60

const RootPage = async () => {
  const [posts] = await Promise.all([getPosts(NUMBER_OF_POSTS_PER_PAGE), getFirstPost()])

  return (
    <Wrapper>
      <NoContents contents={posts} />
    </Wrapper>
  )
}

export default RootPage
