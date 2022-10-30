import type { NextPage } from 'next'
import { Layout } from '../components/Layout'
import styled from 'styled-components'
import { CoupleImageContainer } from '../components/CoupleImageContainer'
import { GreetingContainer } from '../components/GreetingContainer'
import { CountDownContainer } from '../components/CountDownContainer'

const Home: NextPage = () => {
  return (
    <Layout title="home">
      <CoupleImageContainer />
      <GreetingContainer />
      <CountDownContainer />
    </Layout>
  )
}

export default Home
