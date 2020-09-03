  
import styled from 'styled-components';
import media from "styled-media-query"
import { hideLabel } from '../Form/Input/styled';

import messages from './messages';

export const Text = styled.div`
  font-size: 14px;
  margin-left: 1em;
  margin-bottom: 1em;
  color: white;

  ${media.lessThan("large")`
    margin-left: 1em;
  `}
`;

export const Title = styled.h3`
  color: orange;
  margin: 1em;
`;

export const Newsletter = styled.section`
  padding: 2rem 5rem;
  border-top: 1px solid var(--borders);

  ${media.lessThan("large")`
    padding: 2rem 0;
    max-width: 100%;
  `}
`;

export const Form = styled.div`
  display: flex;
  flex-wrap: wrap;
  .form {
    flex: 2;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 1em;

    ${media.lessThan("small")`
        flex-direction:column;
        margin: 0;
        padding: 1em;
    `}
  }

  label {
    ${hideLabel}
  }

  fieldset {
    flex: 5;
    width: 100%;
  }
  button {
    flex: 1.5;
  }
`;

export const Message = styled.div`
  padding-top: 1em;
  font-size: 10px;
  color: ${({ type }) => messages[type].color}
`;