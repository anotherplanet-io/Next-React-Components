import { Component } from 'react'
import { Container, Row, Cell } from '../packages/ap-layout-grid'

class index extends Component {
  static async getInitialProps ({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
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
              Col 2
            </Cell>
            <Cell>
              Col 3
            </Cell>
          </Row>
        </Container>
        <Container>
          <Row>
            <Cell style={{ backgroundColor: 'teal' }}>
              <h1>Hello World</h1>
            </Cell>
            <Cell>
              Col 2
            </Cell>
            <Cell>
              Col 3
            </Cell>
          </Row>
        </Container>
        <Container maxWidth={'1024px'} align={'left'}>
          <Row>
            <Cell>
              Hello World { this.props.userAgent }
            </Cell>
            <Cell phone={4} tablet={8} desktop={12}>
              Hello World { this.props.userAgent }
            </Cell>
            <Cell>
              Hello World { this.props.userAgent }
            </Cell>
          </Row>
        </Container>
        <Container maxWidth={'1024px'}>
          <Row>
            <Cell desktop={12}>
              Hello World { this.props.userAgent }
            </Cell>
            <Cell phone={4} tablet={8} desktop={12}>
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
            <Cell phone={4} tablet={8} desktop={12}>
              Hello World { this.props.userAgent }
            </Cell>
            <Cell>
              Hello World { this.props.userAgent }
            </Cell>
          </Row>
        </Container>
      </div>
    )
  }
}

export default index
