import Script from 'next/script'
import styled from '@emotion/styled'
import config from 'utils/config'
import styles from 'utils/styles'

const Footer = () => {
  return (
    <Root>
      <COPYRIGHT>
        &copy; 2022 {config.info.siteName}
        <SPECIALTHANKS>
          {' '}
          Powered by{' '}
          <a href='https://github.com/otoyo/easy-notion-blog' target='_blank' rel='noreferrer'>
            easy-notion-blog
          </a>
        </SPECIALTHANKS>
      </COPYRIGHT>
      <DMCA>
        <a
          href='//www.dmca.com/Protection/Status.aspx?ID=7a648f21-69b5-4293-8a57-0897e957963c'
          title='DMCA.com Protection Status'
          className='dmca-badge'
        >
          <img
            src='https://images.dmca.com/Badges/dmca_protected_sml_120l.png?ID=7a648f21-69b5-4293-8a57-0897e957963c'
            alt='DMCA.com Protection Status'
          />
        </a>
        <Script src='https://images.dmca.com/Badges/DMCABadgeHelper.min.js'></Script>
      </DMCA>
    </Root>
  )
}

const Root = styled.footer`
  grid-area: footer;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
  color: #fff;
  background-color: #000000;

  @media (max-width: ${styles.sizes.breakpoint.small}) {
    flex-wrap: wrap;
    justify-content: center;
  }

  p {
    padding: 1rem;
    font-size: 1.2rem;

    @media (max-width: ${styles.sizes.breakpoint.small}) {
      width: 100%;
    }
  }

  a {
    color: #fff;
  }
`

const COPYRIGHT = styled.div`
  padding: 1rem;
  font-size: 1.2rem;
`

const SPECIALTHANKS = styled.span`
  font-size: 1.2rem;
  &:before {
    content: ' | ';
  }
  @media (max-width: ${styles.sizes.breakpoint.small}) {
    display: block;
    &:before {
      content: '';
    }
  }
`

const DMCA = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 8px;
`

export default Footer
