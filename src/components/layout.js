import React from "react"

import { rhythm } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `0 ${rhythm(1.5)}`,
        }}
      >
        <main>{children}</main>
        <footer>
         
        </footer>
      </div>
    )
  }
}

export default Layout
