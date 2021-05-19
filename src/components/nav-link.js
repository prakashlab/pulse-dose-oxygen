/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import isAbsoluteURL from 'is-absolute-url'

const styles = {
  display: 'block',
  pl: 2,
  pr: 4,
  pb: 2,
  color: 'inherit',
  textDecoration: 'none',
  fontSize: 2,
  fontWeight: 'bold',
  '&.active': {
    backgroundColor: 'highlight',
  },
  '&:hover': {
    backgroundColor: 'highlight',
  },
}

export default ({ href, children, ...props }) => {
  const isExternal = isAbsoluteURL(href || '')

  if (isExternal) {
    return <a {...props} href={href} sx={styles}>{children}</a>
  }

  const to = props.to || href

  return (
    <Link
      {...props}
      to={to.replace('/anmo2l-docs', '')}
      sx={styles}
      activeClassName="active"
    >
      {children}
    </Link>
  )
}
