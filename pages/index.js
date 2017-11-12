import { Component } from 'react'
import Link from 'next/link'
import { Container, Row, Cell } from '../packages/ap-layout-grid'


class index extends Component {
  static async getInitialProps ({ req }) {
    return {}
  }

  render () {
    return (
      <div>
        <Container>
          <Row>
            <Cell phone={4} tablet={8} desktop={12}>
              <h1>Another Planet Next React Components</h1>
            </Cell>
          </Row>
        </Container>
        <Container>
          <Row>
            <Cell>
              Components
            </Cell>
            <Cell>
              <Link href={'ap-grid-layout'}><a>AP Grid Layout</a></Link>
            </Cell>
          </Row>
        </Container>
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
