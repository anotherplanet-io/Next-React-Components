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
        <Container maxWidth={'1024px'}>
          <Row>
            <Cell phone={4} tablet={8} desktop={12}>
              <h1>Layout Grid</h1>
              <p>Grid of default wide (4 columns) items</p>
            </Cell>
          </Row>
        </Container>
        <Container>
          <Row>
            <Cell className={'demo'}>
              Col span 4
            </Cell>
            <Cell className={'demo'}>
              Col span 4
            </Cell>
            <Cell className={'demo'}>
              Col span 4
            </Cell>
          </Row>
        </Container>
        <Container maxWidth={'1024px'} align={'left'}>
          <Row>
            <Cell>
              Hello World { this.props.userAgent }
            </Cell>
            <Cell>
              Hello World { this.props.userAgent }
            </Cell>
            <Cell>
              Hello World { this.props.userAgent }
            </Cell>
          </Row>
        </Container>
        <Container maxWidth={'1024px'}>
          <Row>
            <Cell>
              Hello World { this.props.userAgent }
            </Cell>
            <Cell>
              Hello World { this.props.userAgent }
            </Cell>
            <Cell>
              Hello World { this.props.userAgent }
            </Cell>
          </Row>
        </Container>
        <Container maxWidth={'1024px'} align={'right'}>
          <Row>
            <Cell>
              Hello World { this.props.userAgent }
            </Cell>
            <Cell>
              Hello World { this.props.userAgent }
            </Cell>
            <Cell>
              Hello World { this.props.userAgent }
            </Cell>
          </Row>
        </Container>
        <style jsx>{`
          .demo {
            background-color: rgba(0, 0, 0, 0.3);
          }

        `}</style>
      </div>
    )
  }
}

export default index
