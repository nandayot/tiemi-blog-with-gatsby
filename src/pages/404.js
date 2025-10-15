import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import Layout from "../components/Layout"

import SEO from "../components/SEO"
import * as S from "../components/404/styled"

const NotFoundPage = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "zoro-w.png" }) {
          childImageSharp {
            gatsbyImageData(
              width: 300
              placeholder: BLURRED
              layout: CONSTRAINED
            )
          }
        }
      }
    `
  )
  return (
    <Layout>
      <S.Wrapper>
        <SEO title="404: Not found | 404: página não encontrada - tiemi.dev" />
        <S.Title id="404title">404</S.Title>
        <S.Description>Deu uma de Roronoa Zoro e parou aqui? Clica na casinha para voltar para home.</S.Description>
        <S.ArtWrapper>
          <S.AvatarWrapper image={avatarImage.childImageSharp.gatsbyImageData} alt="Roronoa Zoro de One Piece" />
        </S.ArtWrapper>
      </S.Wrapper>
    </Layout>
  )
}

export default NotFoundPage