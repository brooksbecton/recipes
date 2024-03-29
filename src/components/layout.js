import React, { useState } from "react"
import { Link } from "gatsby"
import { Dialog } from "@reach/dialog"
import "@reach/dialog/styles.css"

import Search from "./../components/search"
import "./layout.css"

const FooterButton = props => {
  return (
    <button
      {...props}
      className="m-1"
      style={{
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
    <div>
      <div className="mx-auto p-6 lg:pr-42 lg:pl-42 md:pr-32 md:pl-32  mb-12">
        <Dialog
          aria-label="Search Site Form"
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
        <div>
          <main>{children}</main>
        </div>
      </div>
      <footer className="lg:pl-9 mt-0 fixed w-full z-10 bottom-0 text-white bg-green-900 p-2">
        {
          <nav className="flex flex-row lg:justify-start justify-around">
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
            <Link className="m-2 text-white" to="/">
              HOME
            </Link>
            <FooterButton onClick={() => window.history.back()}>
              BACK
            </FooterButton>
          </nav>
        }
      </footer>
    </div>
  )
}

export default Layout
