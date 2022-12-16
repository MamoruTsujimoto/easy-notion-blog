import { NUMBER_OF_POSTS_PER_PAGE } from 'app/server-constants'
import { NoContents } from 'components/blog-parts'
import Wrapper from 'components/base/Wrapper'
import CardLarge from 'components/card/CardLarge'
import CardSmall from 'components/card/CardSmall'
import config from 'utils/config'
import { getPosts, getFirstPost } from 'lib/notion/client'

export const revalidate = 60

const RootPage = async () => {
  const [posts] = await Promise.all([getPosts(NUMBER_OF_POSTS_PER_PAGE), getFirstPost()])
  const postNum = config.setting.postNum
  const newPost = posts[0]
  const pastPost = posts.slice(1, postNum)

  return (
    <Wrapper>
      <NoContents contents={posts} />
      <CardLarge post={newPost} />
      <CardSmall title='archives' posts={pastPost} />
    </Wrapper>
  )
}

export default RootPage
