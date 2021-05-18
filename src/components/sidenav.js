/** @jsx jsx */
import { jsx } from 'theme-ui'
import { AccordionNav } from '@theme-ui/sidenav'
import NavLink from './nav-link'
import Sidebar from '../sidebar.mdx'

const components = {
  wrapper: AccordionNav,
  a: NavLink,
}

export default props => (
  <Sidebar
    {...props}
    components={components}
    sx={{
      width: '75%',
      maxWidth: '220px',
      flex: 'none',
      pl: [20, 0],
      pr: 3,
      pt: [5, 3],
      pb: 4,
      transition: 'none',
      '.icon': {
        height: '1em',
        width: '1em',
        margin: '0 0.05 em 0 0.1em',
        verticalAlign: '0.1em',
      },
    }}
  />
)
