import merge from 'deepmerge'
import defaultTheme from './default-theme'

export default ({children = {}, theme = {}, phone = null, tablet = null, desktop = null, align = null, ...props}) => {
  const g = merge(defaultTheme, theme)
  if (phone !== null) {
    g.phone.span = phone;
  }
  if (tablet !== null) {
    g.tablet.span = tablet;
  }
  if (desktop !== null) {
    g.desktop.span = desktop;
  }

  const phoneCellWidtPercent = (100 / g.phone.columns) * g.phone.span;
  const tabletCellWidtPercent = (100 / g.tablet.columns) * g.tablet.span;
  const desktopCellWidtPercent = (100 / g.desktop.columns) * g.desktop.span;

  let alignClassName = '';
  let orderClassName = '';

  if(align !== null) {
    switch (align) {
      case 'top':
        alignClassName = 'top'
        break;
      case 'middle':
      case 'center':
        alignClassName = 'middle'
        break;
      case 'bottom':
        alignClassName = 'bottom'
        break;
      case 'stretch':
        alignStyle = 'stretch';
        break;
      default:
    }
  }
  return (
    <div className={`${alignClassName} ${orderClassName}`} {...props}>
      {children}
      <style jsx>{`

        /* phone */
        div {
          width: ${phoneCellWidtPercent}%;
          width: calc(${phoneCellWidtPercent}% - ${g.phone.gutter}px);
          margin: ${(g.phone.margin / 2)}px;
          box-sizing: border-box;
        }

        div.top {
          align-self: flex-start;
        }

        div.middle {
          align-self: center;
        }

        div.bottom {
          align-self: flex-end;
        }

        div.strech {
          align-self: stretch;
        }

        /* tablet */
        @media (min-width: ${g.tablet.breakpoints}px) and (max-width: ${(g.desktop.breakpoints - 1)}px) {
          div {
            width: ${tabletCellWidtPercent}%;
            width: calc(${tabletCellWidtPercent}% - ${g.tablet.gutter}px);
          }
        }

        /* desktop */
        @media (min-width: ${g.desktop.breakpoints}px) {
          div {
            width: ${desktopCellWidtPercent}%;
            width: calc(${desktopCellWidtPercent}% - ${g.desktop.gutter}px);
          }
        }

        @supports(display: grid) {

          div {
            margin: 0;
            width: auto;
            grid-column-end: span ${g.phone.span};
          }

          div.top {
            align-self: start;
          }

          div.bottom {
            align-self: end;
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
