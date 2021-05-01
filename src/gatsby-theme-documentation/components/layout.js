/** @jsx jsx */
import { useState, useRef } from 'react'
import { Global } from '@emotion/core'
import { Styled, Box, Container, jsx, useThemeUI } from 'theme-ui'
import { useLocation } from '@reach/router'

import Header from './header'
import Sidenav from './sidenav'

export default ({ children }) => {
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

  const location = useLocation();

  return (
    <Styled.root>
      <Global styles={bodyStyles} />
      <Box variant="layout">
        <Header nav={nav} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Container py={0}>
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
                px: 3,
              }}
            >
              {children}
            </div>
          </div>
        </Container>
      </Box>
    </Styled.root>
  )
}
