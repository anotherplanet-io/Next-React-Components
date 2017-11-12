# Next-React-Components

This project is inspired by Bootstrap, Material design and more.

[Next](https://github.com/zeit/next.js) [React](https://github.com/facebook/react) Components
100% JS and JSX

## AP Grid Layout

### DRY mode.
Write less code.

```js
import { Container, Row, Cell } from '../packages/ap-layout-grid'
```

```html
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
```

### Inline style

```html

<Container>
  <Row>
    <Cell style={{ backgroundColor: 'teal' }}>
      <h1>Hello World<h1>
    </Cell>
    <Cell>
      Col 2
    </Cell>
    <Cell>
      Col 3
    </Cell>
  </Row>
</Container>

```

### NO CSS, NO SASS, NO LESS
Use [styled-jsx V2](https://github.com/zeit/styled-jsx)
Full, scoped and component-friendly CSS support for JSX (rendered on the server or the client).

No CSS dependence.

## Material Design

Inspired by Google Material.io layout grid.

## default settings

Containers are fluid by default.

### Max-Width

Set a max width:

```html
<Container maxWidth={'1024px'}>
  …
</Container>
```
### Align

Centered by default

```html
<Container maxWidth={'1024px'} align={'left'}>
  …
</Container>
```

### Phone

- Margin: 16px
- Gutter: 16px
- Columns grid: 4
- Default span: 4

### Tablet

- Margin: 16px
- Gutter: 16px
- Columns grid : 8
- Default span: 4
- Breakpoints: 480px

### Desktop

- margin: 24px
- gutter: 24px
- Columns grid : 12
- Default span: 4
- breakpoints: 840px
