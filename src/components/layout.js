import React from "react"
import { Link } from "gatsby"

import './layout.css'
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
          padding: '5%',
          marginBottom: '50px'

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
            flexDirection: 'row-reverse',
            justifyContent: "space-between",
            backgroundColor: "#3F4868",
            width: "100vw",
            height: "60px",
            bottom: 0,
          }}
        >
          <div
            style={{
              display: "flex",
              alignSelf: "center",
              alignContent: "center",
              fontSize: "29px",
              paddingRight: "15px",
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
          <div className='nes-field' style={{ alignSelf: "center" }}>
            <input
              className="nes-input"
              type="text"
              name="search"
              placeholder="Search"
            />
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Layout
