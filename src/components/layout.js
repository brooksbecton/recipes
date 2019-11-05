import React, { useState } from "react"
import { Link } from "gatsby"

import "./layout.css"

const FooterButton = props => {
  return (
    <button
      {...props}
      style={{
        color: "white",
        backgroundColor: "transparent",
        border: 0,
        padding: 0,
        ...props.style,
      }}
    >
      {props.children}
    </button>
  )
}

const Layout = ({ children }) => {
  const [isShowingSearch, setIsShowingSearch] = useState(false)
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
          flexDirection: "row ",
          justifyContent: "space-between",
          height: "60px",
          bottom: 0,
          width: "100%",
          margin: 0,
          padding: isShowingSearch ? 5: 16,
        }}
      >
        {isShowingSearch ? (
          <>
            {" "}
            <input
              className="nes-input"
              type="text"
              name="search"
              placeholder="SEARCH"
            />{" "}
            <button onClick={() => setIsShowingSearch(false)}>CANCEL</button>
          </>
        ) : (
          <>
            <FooterButton
              onClick={() =>
                setIsShowingSearch(prevIsShowingSearch => !prevIsShowingSearch)
              }
            >
              SEARCH
            </FooterButton>
            <div
              style={{
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
                  marginRight: 20,
                }}
                to="/"
              >
                HOME
              </Link>
              <FooterButton onClick={() => window.history.back()}>
                BACK
              </FooterButton>
            </div>
          </>
        )}
      </footer>
    </div>
  )
}

export default Layout
