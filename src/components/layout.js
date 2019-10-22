import React from "react"
import { rhythm } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div
        style={{
          marginBottom: rhythm(2),
        }}
      >
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `0 ${rhythm(1.5)}`,
          }}
        >
          <main>{children}</main>
        </div>
        <div>
          <footer
            style={{
              color: "white",
              display: "flex",
              position: "fixed",
              alignContent: "center",
              backgroundColor: "#3F4868",
              width: "100vw",
              height: "50px",
              bottom: 0,
              padding: "10px",
            }}
          >
            <button
              style={{ color: "white" }}
              onClick={() => window.history.back()}
            >
              Back
            </button>
          </footer>
        </div>
      </div>
    )
  }
}

export default Layout
