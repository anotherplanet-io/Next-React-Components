import { Component } from 'react'
import Link from 'next/link'
import Head from 'next/head'
// packages
import { Container, Row, Cell } from '../packages/ap-layout-grid'
// components
import Nav from '../components/nav'
// local
import styleGlobal from './style'


class index extends Component {
  static async getInitialProps ({ req }) {
    return {}
  }

  render () {
    return (
      <div>
        <Head>
          <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Encode+Sans:400,900' key='google-font-family-Encode-Sans-400-900' />
        </Head>
        <Nav></Nav>
        <Container>
          <Row>
            <Cell phone={4} tablet={8} desktop={12}>
              <h1>Another Planet Next React Components</h1>
            </Cell>
          </Row>
          <Row>
            <Cell phone={4} tablet={8} desktop={12}>
              <p>Version 1.0.0</p>
            </Cell>
          </Row>
        </Container>
        <Container>
          <Row>
            <Cell>
              Components
            </Cell>
            <Cell>
              <Link href={'/ap-grid-layout'}><a>AP Grid Layout</a></Link>
            </Cell>
          </Row>
        </Container>
        <style jsx global>{styleGlobal}</style>
        <style jsx>{`
          h1 {
            text-align: center;
          }

        `}</style>
      </div>
    )
  }
}

export default index
