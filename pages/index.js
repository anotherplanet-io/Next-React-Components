import { Component } from 'react'
import Link from 'next/link'
import Head from 'next/head'
// packages
import { Container, Row, Cell } from '../packages/ap-layout-grid'
import { colors } from '../packages/ap-themes'
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
              <h1>Another Planet Components</h1>
              <p>Another Planet Next.js React Components Version 1.0.0</p>
              <p>This project is a collection of small components for <a href='https://github.com/zeit/next.js'>Next.js.</a></p>

              <h2>CSS-in-JS</h2>
              <p>CSS-in-JS libraries let you write your styles in JavaScript. The Javascript inject a string of CSS in a <i>style</i> tag into the DOM.</p>
              <p>Read <a href='https://mxstbr.blog/2016/11/inline-styles-vs-css-in-js/'>Writing your styles in JS ≠ writing inline styles</a></p>

              <h2>Features</h2>
              <p>CSS-in-JS abstracts the CSS model to the component level, rather than the document level (modularity).</p>
              <p>No CSS dependencies</p>
              <p>Server-Side Rendering ready</p>
              <p>Use cool technologie like Next.js, React and <a href='https://github.com/zeit/styled-jsx'>styled-jsx</a></p>

              <h3>Note</h3>
              <p>This project is currently at an early stage of development.</p>

              <h3>Components</h3>
              <ul>
                <li><Link href='/ap-grid-layout'><a>Grid Layout</a></Link></li>
                <li><Link href='/ap-highlight'><a>React Highlight.js</a></Link></li>
                <li><Link href=''><a>Typography (SOON)</a></Link></li>
                <li><Link href=''><a>List (SOON)</a></Link></li>
                <li><Link href=''><a>Dialog (SOON)</a></Link></li>
                <li><Link href=''><a>Theme colors (SOON)</a></Link></li>
                <li><Link href=''><a>Pop over menus (SOON)</a></Link></li>
                <li><Link href=''><a>Card (SOON)</a></Link></li>
                <li><Link href=''><a>Icons (SOON)</a></Link></li>
              </ul>

            </Cell>
          </Row>
        </Container>
        <style jsx global>{styleGlobal}</style>
        <style jsx>{`
          h1 {
            text-align: center;
            text-transform: uppercase;
          }

        `}</style>
      </div>
    )
  }
}

export default index
