import { bootstrap } from '@theme-ui/presets'

const heading = {
  fontFamily: 'heading',
  fontWeight: 'heading',
  lineHeight: 'heading',
  a: {
    color: 'inherit',
    textDecoration: 'none',
    '&:hover': {
      color: 'primary',
    },
  }
}

export default {
  ...bootstrap,
  fonts: {
    body: 'Inter, -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif',
    heading: 'Inter, -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif',
  },
  fontSizes: [14, 16, 18, 20, 24, 32, 40, 48, 64, 72],
  fontWeights: {
    body: '500',
    heading: '700',
  },
  lineHeights: {
    body: 1.54,
    heading: 1.3,
  },
  textStyles: {
    heading,
    display: {
      variant: 'textStyles.heading',
      fontSize: 6,
      mt: 3,
    },
  },
  layout: {
    maxWidth: '950px',
    marginLeft: 'auto',
    marginRight: 'auto',
    py: 32,
    px: [16, 32],
  },
  breakpoints: ['800px'],
  styles: {
    Container: {
      p: 3,
      maxWidth: 1024,
    },
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      textRendering: 'optimizeLegibility',
      fontFeatureSettings: '"case", "calt", "ss03", "cv10", "locl", "cpsp", "ordn"',
      WebkitFontSmoothing: 'antialiased',
      textSizeAdjust: '100%',
    },
    h1: {
      variant: 'textStyles.display',
    },
    h2: {
      variant: 'textStyles.heading',
      fontSize: 5,
    },
    h3: {
      variant: 'textStyles.heading',
      fontSize: 4,
    },
    h4: {
      variant: 'textStyles.heading',
      fontSize: 3,
    },
    h5: {
      variant: 'textStyles.heading',
      fontSize: 2,
    },
    h6: {
      variant: 'textStyles.heading',
      fontSize: 1,
    },
    a: {
      color: 'primary',
      '&:hover': {
        color: 'secondary',
      },
    },
    pre: {
      variant: 'prism',
      fontFamily: 'monospace',
      fontSize: 1,
      p: 3,
      color: 'text',
      bg: 'muted',
      overflow: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      color: 'secondary',
      fontSize: 1,
    },
    inlineCode: {
      fontFamily: 'monospace',
      color: 'secondary',
      bg: 'muted',
    },
    table: {
      width: '100%',
      my: 4,
      borderCollapse: 'separate',
      borderSpacing: 0,
      [['th', 'td']]: {
        textAlign: 'left',
        py: '4px',
        pr: '4px',
        pl: 0,
        borderColor: 'muted',
        borderBottomStyle: 'solid',
      },
    },
    th: {
      verticalAlign: 'bottom',
      borderBottomWidth: '2px',
    },
    td: {
      verticalAlign: 'top',
      borderBottomWidth: '1px',
    },
    hr: {
      border: 0,
      borderBottom: '1px solid',
      borderColor: 'muted',
    },
    img: {
      maxWidth: '100%'
    },
    p: {
      fontSize: 1,
    },
    ol: {
      fontSize: 1,
    },
    ul: {
      fontSize: 1,
    },
    figure: {
      display: 'table',
      maxWidth: '100%',
      width: '100%',
      mx: 0,
      my: 32,
      figcaption: {
        fontWeight: '400',
      }
    },
    sup: {
      a: {
        textDecoration: 'none',
      }
    }
  },
}
