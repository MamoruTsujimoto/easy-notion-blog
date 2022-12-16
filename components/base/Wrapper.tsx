'use client'

import styled from '@emotion/styled'

type Props = {
  children: React.ReactNode
}

const Wrapper = ({ children }: Props) => {
  return <Root>{children}</Root>
}

const Root = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

export default Wrapper
