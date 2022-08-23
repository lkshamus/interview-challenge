import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import Header from "../components/header"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Header header={data?.contentfulHeader?.header} description={data?.contentfulHeader?.description} />
    </Layout>
  )
}


export default IndexPage

export const query = graphql`
  query Index {
    contentfulHeader {
      header
      description
    }
  }
`
