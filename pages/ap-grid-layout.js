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
                <h1>Layout Grid</h1>
              </div>
              <p>Grid of default wide (4 columns) items</p>
              <p>Responsive UI is based on a column-variate grid layout. It has 4 columns on phone, 8 columns on tablet and 12 columns on desktop.</p>
              <p>This columns variable grid is more powerful than the regular 12 columns layout grid.</p>
            </Cell>
          </Row>
        </Container>


        <Container className='demo-container'>
          <Row className='demo-row'>
            <Cell className='demo-cell'>
              Col span 4
            </Cell>
            <Cell className='demo-cell'>
              Col span 4
            </Cell>
            <Cell className='demo-cell' tablet={8}>
              Col span default + tablet 8
            </Cell>
          </Row>
        </Container>

        <Container>
          <Row>
            <Cell phone={4} tablet={8} desktop={12}>
              <div className='code'>
                <Highlight language='javascript' src={`
<Container className='demo-container'>
  <Row className='demo-row'>
    <Cell className='demo-cell'>
      Col span 4
    </Cell>
    <Cell className='demo-cell'>
      Col span 4
    </Cell>
    <Cell className='demo-cell' tablet={8}>
      Col span default + tablet 8
    </Cell>
  </Row>
</Container>
                `}></Highlight>
              </div>
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
        <Container maxWidth={'1024px'} align={'left'} className='demo-container'>
          <Row className='demo-row'>
            <Cell className='demo-cell'>
              Col span default
            </Cell>
            <Cell className='demo-cell'>
              Col span default
            </Cell>
            <Cell className='demo-cell' tablet={8}>
              Col span default + tablet 8
            </Cell>
          </Row>
        </Container>

        <Container>
          <Row>
            <Cell phone={4} tablet={8} desktop={12}>
              <div className='code'>
                <Highlight language='javascript' src={`
<Container maxWidth={'1024px'} align={'left'}>
  …
</Container>
                `}></Highlight>
              </div>
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
        <Container maxWidth={'1024px'} className='demo-container'>
          <Row className='demo-row'>
            <Cell className='demo-cell'>
              Col span default
            </Cell>
            <Cell className='demo-cell'>
              Col span default
            </Cell>
            <Cell className='demo-cell' tablet={8}>
              Col span default + tablet 8
            </Cell>
          </Row>
        </Container>

        <Container>
          <Row>
            <Cell phone={4} tablet={8} desktop={12}>
              <div className='code'>
                <Highlight language='javascript' src={`
<Container maxWidth={'1024px'}>
  …
</Container>
                `}></Highlight>
              </div>
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
        <Container maxWidth={'1024px'} align={'right'} className='demo-container'>
          <Row className='demo-row'>
            <Cell className='demo-cell'>
              Col span default
            </Cell>
            <Cell className='demo-cell'>
              Col span default
            </Cell>
            <Cell className='demo-cell' tablet={8}>
              Col span default + tablet 8
            </Cell>
          </Row>
        </Container>

        <Container>
          <Row>
            <Cell phone={4} tablet={8} desktop={12}>
              <div className='code'>
                <Highlight language='javascript' src={`
<Container maxWidth={'1024px'} align={'right'}>
  …
</Container>
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

          div.demo-page :global(.demo-container) {
            background-color: rgba(0, 0, 0, .1);
          }

          div.demo-page :global(.demo-row) {
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
