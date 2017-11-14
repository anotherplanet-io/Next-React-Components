import css from 'styled-jsx/css'
import { colors } from '../packages/ap-themes'

function getColor(name) {
  return colors[name];
}

export default css`
  body, html {
    font-family: 'Encode Sans', sans-serif;
    background-color: ${getColor('backgroundColor')};
  }
`
