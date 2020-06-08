import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
interface IProps {
  data: any;
}

class About extends React.Component<IProps> {
  render() {
    return (
      <Layout>
        <SEO title="About Brooks Becton" />
        <h1>Brooks Becton</h1>
      </Layout>
    )
  }
}

export default About

