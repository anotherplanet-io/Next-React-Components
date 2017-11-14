import { Component } from 'react'
import Link from 'next/link'
import Head from 'next/head'
// packages
import { Container, Row, Cell } from '../packages/ap-layout-grid'
import { Highlight } from '../packages/ap-highlight'
// components
import Nav from '../components/nav'
// local
import styleGlobal from './style'

export default class extends Component {
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

        <Container>
          <Row>
            <Cell phone={4} tablet={8} desktop={12}>
              <div className='hero'>
                <h1>AP React Highlight.js</h1>
                <p>Javascript syntax highlighter <a href="https://highlightjs.org/">https://highlightjs.org/</a></p>
              </div>

              <p>Highlight.js is a syntax highlighter written in JavaScript. It works in the browser as well as on the server.</p>

              <h2>Getting Started</h2>
              <div>
                <Highlight language='javascript' src={`
import { Highlight } from '../packages/ap-highlight'
                `}></Highlight>
                <Highlight language='javascript' src={`
<Highlight language='javascript' src={\`
  <h1>Title</h1>
\`}></Highlight>
                `}></Highlight>
              </div>
            </Cell>
          </Row>
        </Container>

        <style jsx global>{styleGlobal}</style>
        <style jsx>{`

          .hero {
            text-align: center;
            margin-bottom: 24px;
          }

        `}</style>
      </div>
    )
  }
}
