import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import Layout from "../components/Layout"

import SEO from "../components/seo"
import * as S from "../components/404/styled"

const NotFoundPage = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "zoro-lost-1.png" }) {
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
        <SEO title="404: Not found | 404: página não encontrada - Fernanda Tiemi de Souza Taso" />
        <S.Title id="404title">404</S.Title>
        <S.Description>Deu uma de Roronoa Zoro e parou aqui? Clica na casinha para voltar para home.</S.Description>
        <S.ArtWrapper>
          <S.AvatarWrapper fluid={avatarImage.childImageSharp.fluid} />
          <S.ArtCopyright>art: 
          <S.ArtLink
              href="https://l208p.tumblr.com/"
              title="art by wowwe"
              target="_blank"
              rel="noopener noreferrer"
            >
               wowwe
            </S.ArtLink>
          </S.ArtCopyright>
        </S.ArtWrapper>
      </S.Wrapper>
    </Layout>
  )
}

export default NotFoundPage
