import {Component} from 'react'
import { Container, Row, Cell } from '../packages/ap-layout-grid'

export default class extends Component {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
  }

  render() {
    return (
      <Container>
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
    )
  }
}
