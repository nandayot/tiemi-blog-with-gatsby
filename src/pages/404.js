import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
//import Layout from "../components/Layout"
import SEO from "../components/seo"
import * as S from "../components/404/styled"


const NotFoundPage = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "Enel.png" }) {
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
    <S.Wrapper>
      <SEO title="404: Not found" />
      <S.AvatarWrapper fluid={avatarImage.childImageSharp.fluid} />
      <S.Title>404</S.Title>
      <p>Você entrou na nuvem errada. Meia volta, mortal.</p>
    </S.Wrapper>
  )
}

export default NotFoundPage
