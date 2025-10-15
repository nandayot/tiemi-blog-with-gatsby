import styled from "styled-components"
import media from "styled-media-query"
import { TransitionLink } from '../TransitionLink'

export const PostItemLink = styled(TransitionLink)`
  color: var(--texts);
  display: flex;
  text-decoration: none;

  body#grid & {
    background-color: var(--background);
  }

  &:hover {
    color: var(--highlight);
  }
`

export const PostItemWrapper = styled.section`
  align-items: center;
  border-bottom: 1px solid var(--borders);
  display: flex;
  width: 100%;

  body#grid & {
    border: none;
    padding: 2rem 1rem;
    flex-direction: column;
    justify-content: center;
  }

  ${media.lessThan("medium")`
    align-items: center;
    flex-direction: column;
    padding: 0rem 1rem 1rem;
  `}
`

export const PostItemThumbnail = styled.img`
  object-fit: cover;
  mask-image: linear-gradient(to right, var(--shadowThumbnail) 80%, transparent 100%);
  -webkit-mask-image: linear-gradient(to right, var(--shadowThumbnail) 80%, transparent 100%);
  align-items: center;
  display: flex;
  justify-content: center;
  width: 15vw;

  ${media.lessThan("medium")`
    min-width:15rem;
  `}

  ${media.lessThan("small")`
    width: 100vw;
    min-width: 0;
    max-height: 40vh;

    mask-image: linear-gradient(to bottom, var(--shadowThumbnail) 80%, transparent 100%);
    -webkit-mask-image: linear-gradient(to bottom, var(--shadowThumbnail) 80%, transparent 100%);
  `}

  body#grid & {
    margin-bottom: 1.5rem;
  }
`
export const PostItemTag = styled.div`
  width: fit-content;
  background: ${props => (props.background ? props.background : "var(--highlight)")};
  align-items: center;
  color: var(--postColor);
  display: flex;
  font-weight: 700;
  justify-content: center;
  font-size: 1rem;
  padding: .2rem .5rem;
  margin-bottom: .7rem;

  ${media.lessThan("small")`
    margin-top: 2rem;
  `}
`


export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;

  ${media.lessThan("medium")`
    margin: 0;
  `}
`

export const PostItemDate = styled.time`
  font-size: 0.9rem;
`

export const PostItemTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;

  body#grid & {
    line-height: 1.1;
    margin: 0.8rem 0;
  }
`

export const PostItemDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
`