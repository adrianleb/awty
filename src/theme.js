import { transparentize, invert } from '@theme-ui/color';

const theme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: {
    container: 900,
    photos: 0, //remove photos for now
  },
  fonts: {
    body: '"Source Sans Pro", sans-serif',
    heading: '"porter-sans", serif',
    heading2: '"Jost", sans-serif',
  },

  fontSizes: [12, 14, 16, 24, 32, 48, 64, 96, 128],
  fontWeights: {
    body: 400,
    heading: 400,
    bold: 700,
  },
  lineHeights: {
    body: 1.44,
    header: 1.4,
    heading: 1.4,
  },
  radii: {
    round: '50px',
  },
  colors: {
    text: '#333333',
    background: '#fff',
    background2: '#ffe7e7',
    background3: '#cefff3',
    backgroundGradient:
      'linear-gradient(137deg, #12c6d9 5%, #ffc6fe 46%, #00ff8d 100%)',
    primary: '#333333',
    onBackground: '#333',
    onPrimary: '#fff',
    accent: '#F30000',
    secondary: '#0f3b06',
    muted: '#e4eef6',
    modes: {
      dark: {
        text: '#fff',
        primary: '#fff',
        onBackground: '#fff',
        onPrimary: '#000',
        background: '#000',
        background2: '#001818',
        background3: '#31000C',
        accent: '#0CFFFF',
      },
    },
  },
  forms: {
    label: {
      fontSize: 3,
      fontWeight: 'semiBold',
      py: 2,
    },
    input: {
      outline: 'none',
      borderRadius: 'small',
      borderColor: 'muted',
      color: 'text',
      p: 2,
      '&:focus': {
        borderColor: 'mutedAlt',
        color: 'text',
      },
    },
    inputError: {
      variant: 'forms.input',
      borderColor: 'error',
      color: 'text',
      '&:focus': {
        borderColor: 'error',
        color: 'text',
      },
    },
    textarea: { variant: 'forms.input' },
    textareaError: { variant: 'forms.inputError' },
    select: { variant: 'forms.input' },
    slider: {
      height: '2px',
      borderRadius: 'small',
      color: 'text',
      '&:active, &:hover, &:focus': {
        color: 'primary',
        bg: 'primary',
        '&::-webkit-slider-thumb': {
          boxShadow: (theme) => theme.shadows.lightPrimary,
        },
      },
    },
    sliderActive: {
      variant: 'forms.slider',
      color: 'primary',
      bg: 'primary',
    },
    radio: {
      color: 'muted',
      'input:checked ~ &': {
        color: 'primary',
      },
      'input:focus ~ &': {
        bg: 'successMuted',
      },
    },
    checkbox: {
      color: 'muted',
      'input:checked ~ &': {
        color: 'primary',
      },
      'input:focus ~ &': {
        color: 'primary',
        bg: 'successMuted',
      },
    },
  },
  text: {
    text: { variant: 'styles.p', fontSize: 2 },
    massive: {
      fontSize: [4, 7],
    },
    logo: {
      fontSize: [1, 3],
    },
    sub: {
      fontFamily: 'heading2',
    },
    sub2: {
      lineHeight: 'heading2',
      fontWeight: 'heading2',
      fontFamily: 'heading2',
      fontWeight: 'bold',
      letterSpacing: '0.05em',
      fontSize: [1, 2],
      textTransform: 'uppercase',
    },
    sub3: {
      variant: 'text.sub2',
    },
    styledsub3: {
      variant: 'text.sub3',
      color: 'background',
      lineHeight: 1.65,
    },
    sub4: {
      variant: 'text.sub2',
      fontSize: [1, 2],
    },
    sub5: {
      variant: 'text.sub2',
      fontSize: [4, 5],
    },
    boldedP: {
      fontSize: [1, 2],
      fontFamily: 'body',
      fontWeight: 'bold',
    },
    pageLabel: {
      variant: 'text.sub4',
      fontSize: 0,
    },
    simpleSub3: {
      variant: 'text.sub2',
      fontSize: [2, 3],
    },
    simpleSub4: {
      variant: 'text.sub2',
      fontSize: [3, 4],
    },
  },
  links: {
    nav: {
      display: 'block',
      variant: 'text.sub4',
      px: 0,
      p: 0,
    },
  },
  buttons: {
    icon: {
      stroke: 'onBackground',
    },
    primary: {
      background: 'primary',
      fontFamily: 'heading2',
      letterSpacing: 1,
      fontSize: [2, 3],
      fontWeight: 'bold',
      textTransform: 'uppercase',
      borderRadius: '5px',
      color: 'onPrimary',
      py: 2,
      px: 4,
    },
    text: {
      variant: 'buttons.primary',
      bg: 'transparent',
      textDecoration: 'underline',
      color: 'text',
    },
  },
  layout: {
    container: {
      px: [2],
    },
  },

  styles: {
    sub3bg: {
      color: 'background',
      position: 'relative',

      backgroundImage: (theme) =>
        `linear-gradient(110deg, transparent 50%, ${theme.colors.primary} 53%), linear-gradient(110deg, ${theme.colors.primary} 50%, transparent 53%), linear-gradient(to left, ${theme.colors.primary}, ${theme.colors.primary})`,
      backgroundSize: '17px 100%, 17px 100%, calc(100% - 32px) 100%',
      backgroundPosition: 'left, right, center',
      backgroundRepeat: 'no-repeat',
      display: 'inline',
      px: 3,
      boxDecorationBreak: 'clone',
    },
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    h1: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 7,
    },
    h2: {
      color: 'text',
      fontFamily: 'heading2',
      lineHeight: 'heading2',
      fontWeight: 'heading2',
      fontSize: 4,
    },
    h3: {
      color: 'text',
      fontFamily: 'heading2',
      lineHeight: 'heading2',
      fontWeight: 'heading2',
      letterSpacing: 0.2,
      fontSize: 3,
    },
    h4: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 2,
    },
    h5: {
      color: 'text',
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      fontSize: 1,
    },
    h6: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 0,
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      fontSize: 2,
      fontWeight: 'body',
      lineHeight: 'body',
      // p: 0,
      // m: 0
    },
    sup: {
      fontWeight: 600,
    },
    a: {
      color: 'primary',
      p: 0,
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    img: {
      maxWidth: '100%',
    },
  },
};
export default theme;
