
import styled from 'styled-components'
import media from "styled-media-query"

export const LayoutWrapper = styled.section`
  display: flex;
  flex-direction: column;
`

export const LayoutMain = styled.main`
  background: var(--background);
  min-height: 100vh;
  padding-left: 1.75rem;
  transition: background, color 0.5s;
  width: 100%;

  body#grid & {
    grid-template-areas:
      "posts"
      "pagination";
  }

  ${media.lessThan("small")`
    padding: 0rem 0 3rem 0;
  `}
`
