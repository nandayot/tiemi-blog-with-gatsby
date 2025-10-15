import React from "react"
import propTypes from "prop-types"
// import AniLink from "gatsby-plugin-transition-link/AniLink"
import { TransitionLink } from '../TransitionLink'
import { useTheme } from 'styled-components';
import { cover } from '../../animations/variants';

import * as S from "./styled"

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) => {
  const theme = useTheme();
  return(
    <S.PaginationWrapper>
      {!isFirst && (
        <TransitionLink to={prevPage} animation={cover(theme.background)}>← página anterior</TransitionLink>
      )}
      <p>
        {currentPage} de {numPages}
      </p>
      {!isLast && (
        <TransitionLink to={nextPage} animation={cover(theme.background)}>proxima página →</TransitionLink>
      )}
    </S.PaginationWrapper>
  )
};

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string,
}

export default Pagination