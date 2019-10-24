import React from "react"
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
            alignContent: "center",
            justifyContent: "space-between",
            backgroundColor: "#3F4868",
            width: "100vw",
            height: "50px",
            bottom: 0,
          }}
        >
          <button
            style={{
              color: "white",
              backgroundColor: "transparent",
              border: 0,
            }}
            onClick={() => window.history.back()}
          >
            Back
          </button>

          <div style={{ paddingTop: "8px" }}>
            <input type="text" name="search" placeholder="Search" />
            <button
              style={{ backgroundColor: "white", height: "34px", border: 0 }}
            >
              X
            </button>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Layout
