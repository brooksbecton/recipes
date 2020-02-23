import * as React from "react"
import { graphql } from "gatsby"
import Img, { FluidObject } from "gatsby-image"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Layout from "../components/layout"
import SEO from "../components/seo"


import Slider from "react-slick";

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    );
  }
}

interface IProps {
  data: any
}

const Savannah = ({ data = [] }: IProps) => {
  const images = data.images.edges.map(img => ({
    img: img.node.childImageSharp.fluid,
    fileName: img.node.name,
  }))
  const [activeImage, setActiveImage] = React.useState(images[0])
  const descriptions = {
    1: "Talmadge Memorial Bridge",
  }
  console.log(images)
  return (
    <Layout>
      <SEO title="Savannah August 2019" />
      <div className="m-3">
        <h1>Savannah</h1>
        <ul className="lg:flex lg:flex-row lg:w-full md:w-1/2 lg:flex-wrap w-screen justify-center">
          {images.map(img => {
            return (
              <li
                key={img.name}
                className=" w-1/4 rounded overflow-hidden shadow-lg p-3"
              >
                <Img fluid={img.img} alt="" />

                <div className="px-6 py-4">
                  <p className="font-bold text-xl mb-2">
                    {descriptions[img.fileName]}
                  </p>
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
          name
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
