/** @jsx jsx */
import { jsx } from 'theme-ui'

export default props => (
  <button
    {...props}
    sx={{
      appearance: 'none',
      fontFamily: 'inherit',
      fontSize: 1,
      fontWeight: 'bold',
      whiteSpace: 'nowrap',
      m: 0,
      px: 3,
      py: 2,
      my: 2,
      color: 'text',
      bg: 'muted',
      border: 0,
      borderRadius: 2,
      ':focus': {
        outline: '2px solid',
      },
      ':hover': {
        color: 'primary',
      },
      cursor: 'pointer',
    }}
  />
)
