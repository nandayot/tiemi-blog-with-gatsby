import React from "react"
import PropTypes from "prop-types"

import getThemeColor from "../../utils/getThemeColor"

import * as S from "./styled"

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
  }) => (
    <S.PostItemLink to={slug} drip direction="right" bg={getThemeColor()} duration={0.6}>
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
  )

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