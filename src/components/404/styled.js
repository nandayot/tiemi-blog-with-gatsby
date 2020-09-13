import styled from "styled-components"
import Img from "gatsby-image"
import media from "styled-media-query"


export const Wrapper = styled.section`
    height: 100vh;
    background: var(--background);
    margin: 0;
    padding: 0;
    place-items: center;
    justify-content: space-between;
    display: flex;
    flex-direction: column;

    ${media.lessThan("small")`
        position: fixed;
    `}
`

export const Title = styled.h1`
    font-family: 'Architects Daughter', cursive;
    font-size: 14rem;
    margin: 0;
    color: var(--404Title);
    margin-top: 2rem;

    ${media.lessThan("small")`
        font-size: 48vw;
    `}
`
export const Description = styled.h4`
    font-family: 'Inconsolata', monospace;
    font-size: 1.2rem;
    margin: 0;
    padding-left: 2rem;
    padding-right: 2rem;
    color: var(--404Description);
`

export const AvatarWrapper = styled(Img)`
    display: flex;
    width: 15rem;
    bottom:0;
    align-items: center;
    justify-content: center;

    ${media.lessThan("small")`
        margin-bottom: 4rem;
    `}
`

export const ArtCopyright = styled.p`
    font-size: 1.5rem;
    color: var(--artCopyright);

    ${media.lessThan("small")`
        margin-bottom: 4.25rem;
        font-size: 1rem;
    `}
`

export const ArtLink = styled.a`
  color: #58ce32;
  text-decoration: none;
  transition: color 0.5s;
  &:hover {
    color: var(--highlight);
  }

  ${media.lessThan("medium")`
    color: #58ce32;
    cursor: pointer;
    
  `}

  ${media.lessThan("small")`
    color: #58ce32;
    cursor: pointer;
    
  `}
  
`

export const ArtWrapper = styled.div`
    display:flex;
    flex-direction: row;
    align-items: flex-end;
    overflow: hidden;
`