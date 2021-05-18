/** @jsx jsx */
import { useState, useRef } from 'react'
import { Global } from '@emotion/core'
import { Themed, Box, Container, jsx, useThemeUI } from 'theme-ui'
import { useLocation } from '@reach/router'

import Header from './header'
import Sidenav from './sidenav'
import headerImage from '../../uploads/header.jpg'

export default ({ isHome, children }) => {
  const { theme: { colors = {} } } = useThemeUI()
  const [menuOpen, setMenuOpen] = useState(false)
  const nav = useRef(null)

  const bodyStyles = {
    body: {
      margin: 0,
      color: colors.text,
      backgroundColor: colors.background
    }
  }

  const location = useLocation()

  const ThemedRoot = Themed.root

  if (isHome) {
    return (
      <ThemedRoot>
        <Global styles={bodyStyles} />
        <Box variant="layout">
          <Header nav={nav} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </Box>
        <div sx={{
          display: ['block', 'flex'],
          marginBottom: [0, '-8rem'],
          maxHeight: '32rem',
        }}>
          <img alt="Oxygen cylinders" src={headerImage} width="100%" sx={{ objectFit: 'cover' }} />
        </div>
        <Box variant="layout">
          <Container>
            <div ref={nav} sx={{ display: ['block', 'flex'] }}>
              <Sidenav
                role="navigation"
                open={menuOpen}
                sx={{
                  display: [null, 'block'],
                  marginTop: [0, '8rem'],
                }}
                onFocus={() => setMenuOpen(true)}
                onBlur={() => setMenuOpen(false)}
                onClick={() => setMenuOpen(false)}
                pathname={location.pathname}
              />
              <div
                sx={{
                  overflow: 'hidden',
                  px: [3, 32],
                  pt: [0, 3],
                  pb: 3,
                  backgroundColor: 'background',
                }}
              >
                {children}
              </div>
            </div>
          </Container>
        </Box>
      </ThemedRoot>
    )
  }

  return (
    <ThemedRoot>
      <Global styles={bodyStyles} />
      <Box variant="layout">
        <Header nav={nav} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Container>
          <div
            ref={nav}
            sx={{
              display: ['block', 'flex'],
            }}
          >
            <Sidenav
              role="navigation"
              open={menuOpen}
              sx={{ display: [null, 'block'] }}
              onFocus={() => setMenuOpen(true)}
              onBlur={() => setMenuOpen(false)}
              onClick={() => setMenuOpen(false)}
              pathname={location.pathname}
            />
            <div
              sx={{
                overflow: 'hidden',
                px: [3, 32],
                pt: 3,
                pb: 3,
              }}
            >
              {children}
            </div>
          </div>
        </Container>
      </Box>
    </ThemedRoot>
  )
}
