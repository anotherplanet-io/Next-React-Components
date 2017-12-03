import React from 'react'
import Link from 'next/link'

export default () => <nav>
  <div className='title'><Link href={ process.env.BACKEND_URL + '/' }><a>[AP] COMPONENTS FOR NEXT.JS</a></Link></div>
  <div className="menu">
    <span><Link href={ './' }><a>Components</a></Link></span>
    <span><Link href={ './ap-grid-layout' }><a>About</a></Link></span>
  </div>
  <style jsx>{`
    nav {
      height: 56px;
      background-color: black;
      color: white;
      overflow: hidden;
    }

    nav a {
      color: white;
      text-decoration: none;
      line-height: 24px;
      font-size: 16px;
      font-weight: 400;
    }

    nav > div {
      padding: 16px;
    }

    .title {
      float: left;
    }

    .menu {
      float: right;
    }

    .menu span {
      padding: 0 0.5em;
    }

  `}</style>
</nav>
