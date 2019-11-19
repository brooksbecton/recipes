import React, { useState } from "react"
import { Link } from "gatsby"
import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog"
import VisuallyHidden from "@reach/visually-hidden"

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
      <Dialog
        isOpen={isShowingSearch}
        onDismiss={() => setIsShowingSearch(false)}
        style={{
          position: "fixed",
          top: 0,
          height: "100vh",
          width: "100vw",
          backgroundColor: "white",
          padding: 20,
          overflowY: "scroll",
        }}
      >
        <div>
          <Search
            collapse
            indices={[
              { name: `recipes`, title: `Recipes`, hitComp: `PostHit` },
            ]}
          />
          <button
            style={{
              border: "none",
              backgroundColor: "blue",
              color: "white",
              opacity: 0.9,
              position: "fixed",
              bottom: 15,
              right: 15,
              borderRadius: "80%",
              width: "60px",
              height: "60px",
            }}
            onClick={() => setIsShowingSearch(false)}
          >
            X
          </button>
        </div>
      </Dialog>
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
          flexDirection: "row",
          justifyContent: "space-between",
          height: "60px",
          bottom: 0,
          width: "100%",
          margin: 0,
          padding: 16,
        }}
      >
        {
          <>
            {isShowingSearch ? (
              <FooterButton onClick={() => setIsShowingSearch(false)}>
                CANCEL
              </FooterButton>
            ) : (
              <FooterButton
                onClick={() =>
                  setIsShowingSearch(
                    prevIsShowingSearch => !prevIsShowingSearch
                  )
                }
              >
                SEARCH
              </FooterButton>
            )}
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
        }
      </footer>
    </div>
  )
}

export default Layout
