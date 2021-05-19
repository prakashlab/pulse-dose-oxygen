/** @jsx jsx */
import { jsx, Container, Flex } from 'theme-ui'
import { MDXProvider } from '@mdx-js/react'

import MenuButton from './menu-button'
import Content from '../header.mdx'

const styles = {
  alignItems: 'center',
  width: '100%',
  height: 72,
  a: {
    '&:active': {
      backgroundColor: 'background',
    },
  },
  img: {
    height: 48,
    objectFit: 'contain',
    imageRendering: '-webkit-optimize-contrast',
  },
  h1: {
    m: 0,
    a: {
      m: 0,
      pt: 3,
      pb: 0,
      display: 'inline-block',
    }
  },
  ul: {
    ml: 'auto',
    display: 'flex',
    listStyleType: 'none',
    my: 0,
  },
  li: {
    ml: 3
  }
}

export default ({ menuOpen, setMenuOpen, nav }) => {
  return (
    <Container>
      <Flex sx={{ justifyContent: 'space-between' }}>
        <Flex sx={styles}>
          <MenuButton
            onClick={e => {
              setMenuOpen(!menuOpen)
              if (!nav.current) return
              const navLink = nav.current.querySelector('a')
              if (navLink) navLink.focus()
            }}
          />
          <MDXProvider>
            <Content />
          </MDXProvider>
        </Flex>
      </Flex>
    </Container>
  )
}
