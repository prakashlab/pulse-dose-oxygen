/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui'
import { MDXProvider } from '@mdx-js/react'

import Content from '../footer.mdx'

const styles = {
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  display: 'block',
  h1: {
    fontSize: 4,
    my: 4,
  },
  h2: {
    fontSize: 3,
    my: 2,
    a: {
      '&:hover': {
        backgroundColor: 'transparent',
      }
    }
  },
  ul: {
    display: 'flex',
    flex: 1,
    flexDirection: ['column', 'row'],
    listStyleType: 'none',
    mt: 0,
    mb: [16, 0],
    mr: 64,
    pl: 0,
    li: {
      minWidth: 240,
      ml: 0,
      ul: {
        display: 'block',
        ml: 0,
      }
    },
  },
}

export default () => {
  return (
    <Box sx={styles}>
      <MDXProvider>
        <Content />
      </MDXProvider>
    </Box>
  )
}
