import merge from 'deepmerge'
import defaultTheme from './default-theme'

export default ({children = {}, theme = {}, phone = null, tablet = null, desktop = null, ...props}) => {
  const g = merge(defaultTheme, theme)
  if (phone !== null) g.phone.span = phone
  if (tablet !== null) g.tablet.span = tablet
  if (desktop !== null) g.desktop.span = desktop
  return (
    <div {...props}>
      {children}
      <style jsx>{`

        /* phone */
        div {
          width: calc(33.33333% - ${g.phone.gutter}px);
          margin: ${(g.phone.margin / 2)}px;
          box-sizing: border-box;
        }

        @supports(display: grid) {

          div {
            margin: 0;
            width: auto;
            grid-column-end: span ${g.phone.span};
          }

          /* tablet */
          @media (min-width: ${g.tablet.breakpoints}px) and (max-width: ${(g.desktop.breakpoints - 1)}px) {
            div {
              grid-column-end: span ${g.tablet.span};
            }
          }

          /* desktop */
          @media (min-width: ${g.desktop.breakpoints}px) {
            div {
              grid-column-end: span ${g.desktop.span};
            }
          }
        }

      `}</style>
    </div>
  )
}
