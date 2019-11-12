import React, { useState } from "react"
import { Link } from "gatsby"

import Search from "./../components/search"
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
          flexDirection: isShowingSearch ? "column-reverse" : "row",
          justifyContent: "space-between",
          height: isShowingSearch ? "90%" : "60px",
          bottom: 0,
          width: "100%",
          margin: 0,
          padding: isShowingSearch ? 5 : 16,
        }}
      >
        {isShowingSearch ? (
          <>
            <button onClick={() => setIsShowingSearch(false)}>CANCEL</button>
            <Search
              collapse
              indices={[
                { name: `recipes`, title: `Recipes`, hitComp: `PostHit` },
              ]}
            />
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
              <nav>
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
              </nav>
            </div>
          </>
        )}
      </footer>
    </div>
  )
}

export default Layout
