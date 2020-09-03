import styled from 'styled-components';
import media from "styled-media-query";

export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  margin: 0.5em;

  ${media.lessThan("small")`
    margin: 0;
  `}
`;

export const hideLabel = `
  height: 0;
  padding: 0;
  margin: 0;
  width: 0;
  opacity: 0;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.875em;
  cursor: pointer;
  margin: 1em;

  ${media.lessThan("small")`
    margin-bottom: 1em;
  `}

`;

export const Field = styled.input`
  width: 100%;
  border: 0;
  background: black;
  padding: 1em;
  color: white;
  font-size: 14px;
  border: 2px solid orange;

  ${media.lessThan("small")`
    margin-bottom: 1em;
  `}
`;

export const Error = styled.span`
  display: block;
  font-size: 10px;
  color: yellow;
  margin-top: 10px;

  ${media.lessThan("small")`
    margin-bottom: 10px;
  `}
`;