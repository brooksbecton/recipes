import React from "react"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"

const Layout = ({ children }) => {
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
            justifyContent: "space-between",
            backgroundColor: "#3F4868",
            width: "100vw",
            height: "50px",
            bottom: 0,
          }}
        >
          <div
            style={{
              display: "flex",
              alignSelf: "center",
              alignContent: "center",
              fontSize: "29px",
              paddingLeft: "15px",

              justifyContent: "space-between",
            }}
          >
            <Link
              style={{ boxShadow: 0, color: "white", textDecoration: "none" }}
              to="/"
            >
              <span role="img" aria-label="Go Home">
                🏠
              </span>
            </Link>
            <button
              style={{
                color: "white",
                backgroundColor: "transparent",
                border: 0,
              }}
              onClick={() => window.history.back()}
            >
              <span role="img" aria-label="Go to previous page">
                ↩️
              </span>
            </button>
          </div>

          <div style={{ alignSelf: "center" }}>
            <input type="text" name="search" placeholder="Search" />
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Layout
