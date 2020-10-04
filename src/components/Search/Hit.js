import React from 'react'
import PostItem from '../PostItem'

const Hit = ({ hit }) => (
  <PostItem
  source='search'
  slug={hit.fields.slug}
  thumbnail={hit.thumbnail}
  background={hit.background}
  title={hit.title}
  date={hit.date}
  description={hit.description}
  timeToRead = {hit.timeToRead}
  category={hit.category}/>

)
    
export default Hit
