'use client'

import { Global as GlobalStyles } from '@emotion/react'
import { global as globalStyles } from 'utils/styles'

import { NEXT_PUBLIC_URL, NEXT_PUBLIC_SITE_TITLE, NEXT_PUBLIC_SITE_DESCRIPTION } from '../app/server-constants'

import config from 'utils/config'

const DocumentHead = ({ title = '', description = '', path = '', urlOgImage = '' }) => (
  <>
    <title>{title ? `${title} - ${NEXT_PUBLIC_SITE_TITLE}` : NEXT_PUBLIC_SITE_TITLE}</title>
    <meta name='viewport' content='width=device-width,initial-scale=1.0' />
    <meta name='description' content={description ? description : NEXT_PUBLIC_SITE_DESCRIPTION} />
    {NEXT_PUBLIC_URL ? <meta property='og:url' content={new URL(path, NEXT_PUBLIC_URL).toString()} /> : null}
    <meta property='og:title' content={title ? title : NEXT_PUBLIC_SITE_TITLE} />
    <meta property='og:description' content={description ? description : NEXT_PUBLIC_SITE_DESCRIPTION} />
    {urlOgImage ? (
      <meta property='og:image' content={urlOgImage} />
    ) : NEXT_PUBLIC_URL ? (
      <meta property='og:image' content={new URL('/default.jpg', NEXT_PUBLIC_URL).toString()} />
    ) : null}
    <meta name='twitter:card' content='summary_large_image' />
    {urlOgImage ? (
      <meta name='twitter:image' content={urlOgImage} />
    ) : NEXT_PUBLIC_URL ? (
      <meta name='twitter:image' content={new URL('/default.png', NEXT_PUBLIC_URL).toString()} />
    ) : null}
    {NEXT_PUBLIC_URL ? <link rel='canonical' href={new URL(path, NEXT_PUBLIC_URL).toString()} /> : null}
    <link rel='apple-touch-icon' sizes='180x180' href={config.info.icon.apple} />
    <link rel='icon' type='image/png' sizes='32x32' href={config.info.icon.fav32} />
    <link rel='icon' type='image/png' sizes='16x16' href={config.info.icon.fav16} />

    <GlobalStyles styles={globalStyles} />
  </>
)

export default DocumentHead
