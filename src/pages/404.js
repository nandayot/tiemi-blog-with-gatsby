import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import Layout from "../components/Layout"

import SEO from "../components/seo"
import * as S from "../components/404/styled"

const NotFoundPage = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "enelfundo2.png" }) {
          childImageSharp {
              fluid {
                  ...GatsbyImageSharpFluid
              }
          }
        }
      }
    `
  )
  return (
    <Layout>
      <S.Wrapper>
        <SEO title="404: Not found" />
        <S.AvatarWrapper fluid={avatarImage.childImageSharp.fluid} />
      </S.Wrapper>
    </Layout>
  )
}

export default NotFoundPage
