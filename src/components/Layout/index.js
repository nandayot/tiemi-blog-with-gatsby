/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useContext } from "react"
import PropTypes from "prop-types"
import { TransitionContext } from '../../context/TransitionContext'
import { motion, AnimatePresence } from "framer-motion"
import { useLocation } from "@reach/router"

import MenuBar from "../MenuBar"

import * as S from './styled'
import GlobalStyles from '../../styles/global'

const Layout = ({ children }) => {
  const currentLocation = useLocation();
  const { animation } = useContext(TransitionContext);
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <MenuBar />
      <AnimatePresence mode="wait">
        {/* This parent now controls the animation lifecycle */}
        <motion.div key={currentLocation.pathname} initial="initial" animate="animate" exit="exit">
          {/* The page content. It also inherits the state from its parent. */}
          <S.LayoutMain
            as={motion.main}
            variants={animation.pageVariants} // Use the page-specific variants
            transition={animation.transition} // Pass transition for fade
          >
            {children}
          </S.LayoutMain>
        </motion.div>
      </AnimatePresence>
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
