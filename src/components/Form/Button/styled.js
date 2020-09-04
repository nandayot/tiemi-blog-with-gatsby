import styled from 'styled-components';
import media from "styled-media-query";

export const Button = styled.button`
  cursor: pointer;
  padding: 1em;
  font-size: 14px;
  transition: .2s ease-in-out;
  border: 2px solid var(--texts);
  background: var(--background);
  color: var(--tagTitle);
  &:not([disabled]) {
    &:hover {
      background: transparent;
      color: white;
    }
  }
  &[disabled] {
    cursor: initial;
    background: gray;
    border-color: gray;
  }
  margin: 0.5em;
  ${media.lessThan("small")`
    width: 100%;
    margin: 0;
  `}
`;