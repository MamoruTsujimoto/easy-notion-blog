'use client'

import styled from '@emotion/styled'
import { motion } from 'framer-motion'

import Header from 'components/layout/Header'
import Footer from 'components/layout/Footer'

import 'styles/syntax-coloring.css'

import styles from 'utils/styles'
import animations from 'utils/animations'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='ja' prefix='og: https://ogp.me/ns#'>
      <body>
        <Root>
          <Grid>
            <Header />
            <motion.main initial='hidden' animate='visible' variants={animations.fadeIn}>
              <div>{children}</div>
            </motion.main>
            <Footer />
          </Grid>
        </Root>
      </body>
    </html>
  )
}

export default RootLayout

const Root = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  min-height: 100vh;
  transform: translateX(0);
  transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;
  background-color: ${styles.colors.background};
  z-index: 2;
  will-change: auto;

  @media (max-width: ${styles.sizes.breakpoint.small}) {
    width: 100%;
  }

  main.scale {
    .entries {
      transition: 1s ease-in-out;
      transform: scale(0.9);
      filter: blur(4px);
    }

    &:before {
      filter: blur(4px);
    }
  }
`

const Grid = styled.div`
  display: grid;
  grid:
    'header' 86px
    'main' 1fr
    'footer' 40px
    / 1fr;
  gap: 8px;
  height: 100vh;
  transition: 0.3s ease-in-out;

  @media (max-width: ${styles.sizes.breakpoint.small}) {
    grid:
      'header' 55px
      'main' 1fr
      'footer' 1fr
      / 1fr;
    gap: 5px;
  }

  &.is-open {
    overflow: hidden;
    filter: blur(3px);
    //transform: translateX(-350px);

    @media (max-width: ${styles.sizes.breakpoint.small}) {
      transform: translateX(0);
    }
  }
`
