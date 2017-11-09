import variables from './variables'

export default ({children, grid = {}, ...props}) => {
  const g = Object.assign({}, variables, grid);
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
          background-color: blue;
          padding: ${g.phone.margin}px;
        }

        /* tablet */
        @media (min-width: ${g.tablet.breakpoints}px) and (max-width: ${(g.desktop.breakpoints - 1)}px) { /* desktop */
          div {
            background-color: green;
            padding: ${g.tablet.margin}px;
          }
        }

        @media (min-width: ${g.desktop.breakpoints}px) { /* desktop */
          div {
            background-color: red;
            padding: ${g.desktop.margin}px;
          }
        }
      `}</style>
    </div>
  );
}
