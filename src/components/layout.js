/** @jsx jsx */
import { useState, useRef } from 'react'
import { Global } from '@emotion/core'
import { Themed, Box, Container, jsx, useThemeUI } from 'theme-ui'
import { useLocation } from '@reach/router'
import Img from 'gatsby-image'

import Header from './header'
import Footer from './footer'
import Sidenav from './sidenav'

export default ({ coverImage, children, slug }) => {
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

  const sidenavMarginTop = coverImage ? '6em' : 0;
  const contentPaddingTopMobile = coverImage ? 0 : 3;
  const coverMaxHeight = slug === '/' ? 800 : 480;

  const ThemedRoot = Themed.root
  return (
    <ThemedRoot>
      <Global styles={bodyStyles} />
      <Box variant="layout">
        <Header nav={nav} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </Box>
      {coverImage &&
        <div sx={{
          display: ['block', 'flex'],
          marginBottom: [0, '-6em'],
          height: '55vw',
          maxHeight: coverMaxHeight,
        }}>
          <Img fluid={coverImage.childImageSharp.fluid} sx={{
            width: '100%',
            objectFit: 'cover',
            zIndex: -1,
          }}/>
        </div>
      }
      <Box variant="layout">
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
              sx={{
                display: [null, 'block'],
                marginTop: [0, sidenavMarginTop],
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
                pt: [contentPaddingTopMobile, 3],
                pb: 3,
                backgroundColor: 'background',
              }}
            >
              {children}
            </div>
          </div>
        </Container>
      </Box>
      <div sx={{
        mt: 64,
        pt: 32,
        pb: 64,
        width: '100%',
        backgroundColor: 'muted',
      }}>
        <Box variant="layout">
          <Footer />
        </Box>
      </div>
    </ThemedRoot>
  )
}
