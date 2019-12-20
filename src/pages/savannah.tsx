import * as React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

interface IProps {
  data: any
}

const Savannah = ({ data }: IProps) => {
  return (
    <Layout>
      <SEO title="Savannah August 2019" />
      <h1>Savannah</h1>

      <Img fluid={data.fileName.childImageSharp.fluid} alt="" />
    </Layout>
  )
}

export const query = graphql`
  query {
    fileName: file(relativePath: { eq: "images/savannah/1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Savannah
