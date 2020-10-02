import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const SidebarWrapper = styled.aside`
  align-items: center;
  border-right: 1px solid var(--borders);
  background: var(--mediumBackground);
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  padding: 2rem;
  text-align: center;
  width: 20rem;
  right: 0;

  ${media.lessThan("medium")`
    width: 3.75rem;
    padding: 0.8rem 0;
    position: fixed;
    align-items: center;
    background: var(--mediumBackground);
    border-left: 1px solid var(--borders);
    height: 100vh;
    justify-content: space-between;
    border-left: 1px solid var(--borders);
    transition: background 0.5s;
    position: fixed;
  `}

  ${media.lessThan("small")`
    border-bottom: 1px solid var(--borders);
    align-items: flex-start;
    height: auto;
    margin: 0;
    padding: 0;
    padding-top: 0.5rem;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  `}
`

export const MenuBarLink = styled(AniLink)`
  display: block;

  &.active {
    span {
      color: var(--highlight);
    }
  }
`

export const MenuBarItem = styled.span`
  color: var(--texts);
  cursor: pointer;
  display: block;
  height: 3.75rem;
  padding: 1.1rem;
  position: relative;
  width: 3.75rem;

  &#aboutme {
    display: none;
    ${media.lessThan("medium")`
      display: initial;
    `}
  }

  &.light {
    color: #d4d400;

    &:hover {
      color: #e2e240;
    }
  }

  &:hover {
    color: var(--highlight);
  }

  &.display {
    ${media.lessThan("medium")`
      display: none;
    `}
  }
  ${media.greaterThan("medium")`
    &:hover {
      color: var(--highlight);
    }
  `}
  ${media.lessThan("medium")`
    height: 3.2rem;
    padding: .9rem;
    position: relative;
    width: 3.2rem;
  `}
`