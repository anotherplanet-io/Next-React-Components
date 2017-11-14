import React, { Component } from 'react'
import merge from 'deepmerge'
import hljs from 'highlight.js'

export default class Container extends Component {

  createMarkup = src => {
    const code = hljs.highlightAuto(src)
    return { __html: code.value  }
  }

  render () {
    const {src = '', language = '', ...props} = this.props
    return (
      <pre {...props}><code className={language} dangerouslySetInnerHTML={this.createMarkup(src)}></code>
      <style jsx>{`

          pre {
            display: block;
            overflow-x: auto;
            padding: 0.5em;
            color: #333;
            background: #f8f8f8;
          }

          pre :global(.hljs-comment),
          pre :global(.hljs-quote) {
            color: #998;
            font-style: italic;
          }

          pre :global(.hljs-keyword),
          pre :global(.hljs-selector-tag),
          pre :global(.hljs-subst) {
            color: #333;
            font-weight: bold;
          }

          pre :global(.hljs-number),
          pre :global(.hljs-literal),
          pre :global(.hljs-variable),
          pre :global(.hljs-template-variable),
          pre :global(.hljs-tag .hljs-attr) {
            color: #008080;
          }

          pre :global(.hljs-string),
          pre :global(.hljs-doctag) {
            color: #d14;
          }

          pre :global(.hljs-title),
          pre :global(.hljs-section),
          pre :global(.hljs-selector-id) {
            color: #900;
            font-weight: bold;
          }

          pre :global(.hljs-subst) {
            font-weight: normal;
          }

          pre :global(.hljs-type),
          pre :global(.hljs-class .hljs-title) {
            color: #458;
            font-weight: bold;
          }

          pre :global(.hljs-tag),
          pre :global(.hljs-name),
          pre :global(.hljs-attribute) {
            color: #000080;
            font-weight: normal;
          }

          pre :global(.hljs-regexp),
          pre :global(.hljs-link) {
            color: #009926;
          }

          pre :global(.hljs-symbol),
          pre :global(.hljs-bullet) {
            color: #990073;
          }

          pre :global(.hljs-built_in),
          pre :global(.hljs-builtin-name) {
            color: #0086b3;
          }

          pre :global(.hljs-meta) {
            color: #999;
            font-weight: bold;
          }

          pre :global(.hljs-deletion) {
            background: #fdd;
          }

          pre :global(.hljs-addition) {
            background: #dfd;
          }

          pre :global(.hljs-emphasis) {
            font-style: italic;
          }

          pre :global(.hljs-strong) {
            font-weight: bold;
          }

        `}</style>
      </pre>
    )
  }
}
