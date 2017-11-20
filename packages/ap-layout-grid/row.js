import React from 'react'
import theme from './default-theme'
import merge from 'deepmerge'

export default ({children, grid = {}, ...props}) => {
  const g = merge(theme, grid)
  return (
    <div {...props}>
      {children}
      <style jsx>{`

        /* phone */
        div {
          display: flex;
          flex-flow: row wrap;
          align-items: stretch;
          margin: ${(g.phone.margin / 2 * -1)}px;
        }

        /* tablet */
        @media (min-width: ${g.tablet.breakpoints}px) and (max-width: ${(g.desktop.breakpoints - 1)}px) {
          div {
            margin: ${(g.tablet.margin / 2 * -1)}px;
          }
        }

        /* desktop */
        @media (min-width: ${g.desktop.breakpoints}px) {
          div {
            margin: ${(g.desktop.margin / 2 * -1)}px;
          }
        }

        @supports(display: grid) {
          div {
            display: grid;
            margin: 0;
            grid-gap: ${g.phone.gutter}px;
            grid-template-columns: repeat(${g.phone.columns}, minmax(0, 1fr));
          }

          /* tablet */
          @media (min-width: ${g.tablet.breakpoints}px) and (max-width: ${(g.desktop.breakpoints - 1)}px) {
            div {
              grid-gap: ${g.tablet.gutter}px;
              grid-template-columns: repeat(${g.tablet.columns}, minmax(0, 1fr));
            }
          }

          /* desktop */
          @media (min-width: ${g.desktop.breakpoints}px) {
            div {
              grid-gap: ${g.desktop.gutter}px;
              grid-template-columns: repeat(${g.desktop.columns}, minmax(0, 1fr));
            }
          }
        }

      `}</style>
    </div>
  )
}
