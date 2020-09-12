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
        <SocialLinks />
    </S.SidebarWrapper>
)

export default Sidebar