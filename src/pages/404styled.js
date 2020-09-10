import styled from "styled-components"
import Img from "gatsby-image"
import media from "styled-media-query"

export const Wrapper = styled.section`
`
export const Title = styled.h1`
    font-size: 12em;
    margin: 0;
`

export const AvatarWrapper = styled(Img)`
    display: flex;
    width: 21em;
    height: 33em;
    align-items: center;
    justify-content: center;
    float: left;
`