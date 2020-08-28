import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const ProfileWrapper = styled.section`
  color: var(--texts);
  display: flex;
  flex-direction: column;
`

export const ProfileLink = styled(AniLink)`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;

  ${media.lessThan("large")`
    display: flex;
    text-align: left;
  `}

  &:hover {
    color: var(--highlight);
  }
`

export const ProfileAuthor = styled.h1`
  font-size: 1.6rem;
  margin: 0.5rem auto 1.5rem;

  ${media.lessThan("large")`
    font-size: 1.2rem;
    margin: 5px 0 0 10px;
  `}

`

export const CursorAuto = styled.span`
  display: none;

  ${media.lessThan("large")`
    display: inline-block;
    width: 10px;
    height: 1.15rem;
    background: #ea4a0c;
    margin-left: 5px;
    margin-top: 7px;
    border-radius: 1px;
    animation: cursor 1s infinite;
  `}

  @keyframes cursor {
    0% {
      opacity:0
    }
    50% {
      opacity:1
    }
    
    to{
      opacity:0
    }
  }

`

export const ProfilePosition = styled.small`
  display: block;
  font-size: 1.2rem;
  font-weight: 300;

  ${media.lessThan("large")`
    display: none;
  `}
`

export const ProfileDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.4;

  ${media.lessThan("large")`
    display: none;
  `}
`