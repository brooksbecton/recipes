import * as React from "react"
import { graphql } from "gatsby"
import Img, { FluidObject } from "gatsby-image"
import Slider from "react-slick"

// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"

import Layout from "../components/layout"
import SEO from "../components/seo"

interface IProps {
  data: any
}

const Savannah = ({ data = [] }: IProps) => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  const images = data.images.edges.map(img => img.node.childImageSharp.fluid)
  const [activeImage, setActiveImage] = React.useState(images[0])

  return (
    <Layout>
      <SEO title="Savannah August 2019" />
      <div className="m-3">
        <h1>Savannah</h1>
        <ul className="lg:flex lg:flex-row lg:w-full md:w-1/2 lg:flex-wrap ">
          {images.map((img: FluidObject) => {
            return (
              <li className="max-w-sm rounded overflow-hidden shadow-lg p-3">
                <Img fluid={img} alt="" />

                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    The Coldest Sunset
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </Layout>
  )
}
// relativePath: { eq: "images/savannah/1.jpg" }
export const query = graphql`
  query {
    images: allFile(
      filter: {
        extension: { regex: "/(jpg)/" }
        relativeDirectory: { eq: "images/savannah" }
      }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default Savannah
