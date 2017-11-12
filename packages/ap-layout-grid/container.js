import React, { Component } from 'react'
import merge from 'deepmerge'
import theme from './default-theme'

export default class Container extends Component {
  render () {
    const {children = {}, grid = {}, maxWidth = null, align = null, ...props} = this.props
    const g = merge(theme, grid)
    const maxWidthString = (maxWidth !== null) ? `max-width: ${maxWidth};` : ''
    let alignString
    switch (align) {
      case 'left':
        alignString = 'margin: 0 auto 0 0;'
        break
      case 'right':
        alignString = 'margin: 0 0 0 auto;'
        break
      default:
        alignString = 'margin: 0 auto;'
    }
    return (
      <div {...props}>
        {children}
        <style global jsx>{`
          body {
            margin: 0;
          }
        `}</style>
        <style jsx>{`

          div { /* phone */
            margin: 0;
            padding: ${g.phone.margin}px;
            ${maxWidthString}
            ${alignString}
          }

          /* tablet */
          @media (min-width: ${g.tablet.breakpoints}px) and (max-width: ${(g.desktop.breakpoints - 1)}px) { /* desktop */
            div {
              padding: ${g.tablet.margin}px;
            }
          }

          @media (min-width: ${g.desktop.breakpoints}px) { /* desktop */
            div {
              padding: ${g.desktop.margin}px;
            }
          }
        `}</style>
      </div>
    )
  }
}
