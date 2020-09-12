import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from 'gatsby'

import { Home } from "@styled-icons/boxicons-solid/Home"
import { SearchAlt2 as Search } from "@styled-icons/boxicons-regular/SearchAlt2"
import { UpArrowAlt as Arrow } from "@styled-icons/boxicons-regular/UpArrowAlt"
//import { Bulb as Light } from "@styled-icons/boxicons-regular/Bulb"
import { ToggleRight } from "@styled-icons/boxicons-regular/ToggleRight"
import { ToggleLeft } from "@styled-icons/boxicons-regular/ToggleLeft"
import { Newsletter } from "@styled-icons/entypo/Newsletter"
import { Face } from "@styled-icons/boxicons-solid/Face"
//import { Grid } from "@styled-icons/boxicons-solid/Grid"

import getThemeColor from "../../utils/getThemeColor"

import * as S from "./styled"

const MenuBar = () => {

  const [theme, setTheme] = useState(null)
  //const [display, setDisplay] = useState(null)

  const isDarkMode = theme === "dark"
  //const isListMode = display === "list"

  useEffect(() => {
    setTheme(window.__theme)
    //setDisplay(window.__display)

    window.__onThemeChange = () => setTheme(window.__theme)
    //window.__onDisplayChange = () => setDisplay(window.__display)
  }, [])

  return(
    <S.MenuBarWrapper>
      <S.MenuBarGroup>
      <S.MenuBarLink
            to="/about"
            cover
            direction="right"
            bg={getThemeColor()}
            duration={0.6}
            title="Sobre Mim"
          >
          <S.MenuBarItem>
            <Face />
          </S.MenuBarItem>
        </S.MenuBarLink>

        <S.MenuBarLink
            to="/"
            cover
            direction="right"
            bg={getThemeColor()}
            duration={0.6}
            title="Voltar para Home"
          >
          <S.MenuBarItem>
            <Home />
          </S.MenuBarItem>
        </S.MenuBarLink>
        <S.MenuBarLink
          to="/search/"
          cover
          direction="right"
          bg={getThemeColor()}
          duration={0.6}
          title="Pesquisar"
          >
          <S.MenuBarItem>
            <Search />
          </S.MenuBarItem>
        </S.MenuBarLink>
      </S.MenuBarGroup>
      <S.MenuBarGroup>
        <S.MenuBarItem
         title="Mudar o tema"
         onClick={() => {
           window.__setPreferredTheme(isDarkMode ? "light" : "dark")
         }}
         className={theme}
        >
          {isDarkMode ? <ToggleRight /> : <ToggleLeft />}
        </S.MenuBarItem>
        <S.MenuBarLink
          to="/newsletter/"
          cover
          direction="right"
          bg={getThemeColor()}
          duration={0.6}
          title="Inscreva-se na Newsletter">
          <S.MenuBarItem>
            <Newsletter />
          </S.MenuBarItem>
        </S.MenuBarLink>
        <S.MenuBarItem 
          title="Ir para o Topo"
          onClick={() => {
            window.scroll({ top: 0, behavior: 'smooth' })
          }}
          >
          <Arrow />
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  )
}
  

export default MenuBar