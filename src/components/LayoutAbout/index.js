/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { TransitionPortal } from "gatsby-plugin-transition-link"

import MenuBar from "../MenuBar"
import Sidebar from "../Sidebar"

import * as S from './styled'
import GlobalStyles from '../../styles/global'

const LayoutAbout = ({ children }) => {

  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <TransitionPortal level="top">
        <MenuBar />
      </TransitionPortal>
      <S.LayoutMain>{children}</S.LayoutMain>
      <Sidebar />
      
    </S.LayoutWrapper>
  )
}

LayoutAbout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutAbout
