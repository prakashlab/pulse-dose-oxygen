/** @jsx jsx */
import { jsx, Container, Flex } from 'theme-ui'
import { MDXProvider } from '@mdx-js/react'

import Content from '../footer.mdx'

const styles = {
  alignItems: 'center',
  width: '100%',
  height: 72,
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
    display: ['block', 'flex'],
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
    <Container>
      <Flex sx={{
        justifyContent: 'space-between',
        mb: [250, 120],
      }}>
        <Flex sx={styles}>
          <MDXProvider>
            <Content />
          </MDXProvider>
        </Flex>
      </Flex>
    </Container>
  )
}
