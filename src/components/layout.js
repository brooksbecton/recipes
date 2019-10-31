import React from "react"
import { Link } from "gatsby"

import "./layout.css"
const Layout = ({ children }) => {
  return (
    <div
      style={{
        marginBottom: "2%",
      }}
    >
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          padding: "5%",
          marginBottom: "50px",
        }}
      >
        <main>{children}</main>
      </div>
      <footer
        className="nes-container is-dark"
        style={{
          display: "flex",
          position: "fixed",
          flexDirection: "row-reverse",
          justifyContent: "space-between",
          height: "60px",
          bottom: 0,
          width: "100%",
          margin: 0,
          padding: 5,
        }}
      >
        <div
          style={{
            display: "flex",
            alignSelf: "center",
            alignContent: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            style={{
              boxShadow: 0,
              color: "white",
              textDecoration: "none",
              marginRight: "20px",
            }}
            to="/"
          >
            HOME
          </Link>
          <button
            style={{
              color: "white",
              backgroundColor: "transparent",
              border: 0,
            }}
            onClick={() => window.history.back()}
          >
            BACK
          </button>
        </div>
        <div
          className="nes-field"
          style={{ alignSelf: "center", width: "50%" }}
        >
          <input
            className="nes-input"
            type="text"
            name="search"
            placeholder="Search"
          />
        </div>
      </footer>
    </div>
  )
}

export default Layout
