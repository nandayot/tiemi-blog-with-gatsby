import React from 'react'
import Profile from '../Profile'
import SocialLinks from "../SocialLinks"
import MenuLinks from "../MenuLinks"

import { Face } from "@styled-icons/material-sharp/Face"
import getThemeColor from "../../utils/getThemeColor"

import * as S from './styled'

const Sidebar = () => (
    <S.SidebarWrapper>
        <Profile />
        <S.MenuBarLink
            to="/about/"
            cover
            direction="right"
            bg={getThemeColor()}
            duration={0.6}
            title="Sobre Mim"
          >
          <S.MenuBarItem id="aboutme">
            <Face />
          </S.MenuBarItem>
        </S.MenuBarLink>
        <SocialLinks />
        <MenuLinks />
    </S.SidebarWrapper>
)

export default Sidebar