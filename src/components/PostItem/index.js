import React from "react"
import PropTypes from "prop-types"

import { useTheme } from 'styled-components';

import * as S from "./styled"
import { cover } from '../../animations/variants';

const PostItem = ({
    source,
    slug,
    thumbnail,
    background,
    category,
    date,
    timeToRead,
    title,
    description,
  }) => {
    const theme = useTheme();
    return (
      <S.PostItemLink to={slug} animation={cover(theme.background)}>
        <S.PostItemWrapper>
          {(()=> {
            if (source === 'blog-list') {
              return <S.PostItemThumbnail src={thumbnail} />
            }
          })()}
          <S.PostItemInfo>
            <S.PostItemTag background={background}>{category}</S.PostItemTag>
            <S.PostItemDate>
              {date} • {timeToRead} min de leitura
            </S.PostItemDate>
            <S.PostItemTitle>{title}</S.PostItemTitle>
            <S.PostItemDescription>{description}</S.PostItemDescription>
          </S.PostItemInfo>
        </S.PostItemWrapper>
      </S.PostItemLink>
    );
  };

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  background: PropTypes.string,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default PostItem