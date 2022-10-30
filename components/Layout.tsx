import { FC, memo, ReactNode } from 'react'
import Head from 'next/head'
import styled from 'styled-components'

type Props = {
  children: ReactNode
  title: string
}

export const Layout: FC<Props> = ({ children, title = 'invitation' }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Shippori+Mincho&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Shippori+Mincho&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Main>{children}</Main>
    </div>
  )
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
`
