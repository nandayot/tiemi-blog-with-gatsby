import styled from "styled-components"
import Img from "gatsby-image"

export const Wrapper = styled.section`
    height: 100vh;
    background: #08080c;
    margin: 0;
    padding: 0;
`

export const Title = styled.h1`
    font-size: 12em;
    margin: 0;
    color: white;
`

export const AvatarWrapper = styled(Img)`
    display: block;
    width: 100%;
    top:0;
    height: 100vh;
    align-items: center;
    justify-content: center;
    float: left;
`