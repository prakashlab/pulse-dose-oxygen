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
      maxWidth: '250px',
      flex: 'none',
      pl: [20, 0],
      pr: 3,
      pt: [5, 3],
      pb: 4,
      transition: 'none',
      '.icon': {
        height: '2em',
        width: '2em',
        marginRight: '0.25em',
        marginTop: '0.5em',
        display: 'inline-block',
        verticalAlign: '-0.5em',
        imageRendering: '-webkit-optimize-contrast',
      },
    }}
  />
)
