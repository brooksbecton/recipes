import React from "react"
import { graphql } from "gatsby"
import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog"
import VisuallyHidden from "@reach/visually-hidden"

import Layout from "../components/layout"
import SEO from "../components/seo"

function Example(props) {
  const [showDialog, setShowDialog] = React.useState(false)
  const open = () => setShowDialog(true)
  const close = () => setShowDialog(false)

  return (
    <div>
      <button onClick={open}>Open Dialog</button>

      <Dialog isOpen={showDialog} onDismiss={close}>
        <button className="close-button" onClick={close}>
          <span aria-hidden>×</span>
        </button>
        <p>Hello there. I am a dialog</p>
      </Dialog>
    </div>
  )
}

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return <Example />
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
