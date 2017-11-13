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
      <div className={'demo-page'}>
        <Head>
          <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Encode+Sans:400,900' key='google-font-family-Encode-Sans-400-900' />
        </Head>
        <Nav></Nav>
        <Container maxWidth={'1024px'}>
          <Row>
            <Cell phone={4} tablet={8} desktop={12}>
              <div className='hero'>
                <h1>Layout Grid</h1>
                <p>Grid of default wide (4 columns) items</p>
              </div>
            </Cell>
          </Row>
        </Container>
        <Container>
          <Row className='demo-row'>
            <Cell className='demo-cell'>
              Col span 4
            </Cell>
            <Cell className='demo-cell'>
              Col span 4
            </Cell>
            <Cell className='demo-cell' tablet={8}>
              Col span 4
            </Cell>
          </Row>
        </Container>

        <Container>
          <Row>
            <Cell phone={4} tablet={8} desktop={12}>
              <p>Grid max width 1024px align left </p>
            </Cell>
          </Row>
        </Container>
        <Container maxWidth={'1024px'} align={'left'}>
          <Row className='demo-row'>
            <Cell className='demo-cell'>
              Col span default
            </Cell>
            <Cell className='demo-cell'>
              Col span default
            </Cell>
            <Cell className='demo-cell' tablet={8}>
              Col span default
            </Cell>
          </Row>
        </Container>

        <Container>
          <Row>
            <Cell phone={4} tablet={8} desktop={12}>
              <p>Grid max width 1024px align center (default) </p>
            </Cell>
          </Row>
        </Container>
        <Container maxWidth={'1024px'}>
          <Row className='demo-row'>
            <Cell className='demo-cell'>
              Col span default
            </Cell>
            <Cell className='demo-cell'>
              Col span default
            </Cell>
            <Cell className='demo-cell' tablet={8}>
              Col span default
            </Cell>
          </Row>
        </Container>

        <Container>
          <Row>
            <Cell phone={4} tablet={8} desktop={12}>
              <p>Grid max width 1024px align right</p>
            </Cell>
          </Row>
        </Container>
        <Container maxWidth={'1024px'} align={'right'}>
          <Row className='demo-row'>
            <Cell className='demo-cell'>
              Col span default
            </Cell>
            <Cell className='demo-cell'>
              Col span default
            </Cell>
            <Cell className='demo-cell' tablet={8}>
              Col span default
            </Cell>
          </Row>
        </Container>
        <style jsx global>{styleGlobal}</style>
        <style jsx>{`

          .hero {
            text-align: center;
          }

          div.demo-page :global(.demo-row) {
            padding: 8px;
            background-color: rgba(0, 0, 0, .1);
          }

          div.demo-page :global(.demo-cell) {
            padding: 8px;
            background-color: rgba(0, 0, 0, .2);
          }

        `}</style>
      </div>
    )
  }
}

export default index
