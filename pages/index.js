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
            <Cell>
              Hello World
            </Cell>
            <Cell>
              <Link href={'ap-grid-layout'}><a>AP Grid Layout</a></Link>
            </Cell>
            <Cell>
              Col 3
            </Cell>
          </Row>
        </Container>
      </div>
    )
  }
}

export default index
