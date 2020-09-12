import styled from "styled-components"
import media from "styled-media-query"

export const SocialLinksWrapper = styled.nav`
  margin: 2rem auto;
  width: 100%;

  ${media.lessThan("medium")`
    display: flex;
    flex-direction: column;
    margin: 0;
  `}

`

export const SocialLinksList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-around;
  list-style: none;
  ${media.lessThan("medium")`
    display: block;
  `}

  ${media.lessThan("small")`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-left: 1rem;
  `}
`

export const SocialLinksItem = styled.li`
  ${media.lessThan("small")`
    margin-right: 1rem;
  `}
  
`

export const SocialLinksLink = styled.a`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;
  &:hover {
    color: var(--highlight);
  }

  ${media.lessThan("medium")`
    color: var(--texts);
    cursor: pointer;
    display: block;
    height: 3.75rem;
    padding: 1.1rem;
    position: relative;
    width: 3.75rem;
  `}

  ${media.lessThan("small")`
    color: var(--texts);
    cursor: pointer;
    display: block;
    height: 2.75rem;
    padding: 0;
    position: relative;
    width: 2.75rem;
  `}
  
`

export const IconWrapper = styled.div`
  fill: #bbb;
  width: 30px;
  height: 30px;
`