import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as S from "./styled"

const Avatar = () => {
    const { avatarImage } = useStaticQuery(
        graphql`
            query {
                avatarImage: file(relativePath: { eq: "icon-anime.jpg" }) {
                    childImageSharp {
                        gatsbyImageData(width: 800, placeholder: BLURRED, layout: CONSTRAINED)
                    }
                }
            }
        `
    )

    return <S.AvatarWrapper fluid={avatarImage.childImageSharp.fluid} />
}

export default Avatar