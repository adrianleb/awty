const theme = {
  space: [0, 5, 10, 20, 40, 80, 160, 320, 640],
  sizes: {
    container: 900,
    photos: 46
  },
  fonts: {
    body: '"Source Sans Pro", sans-serif',
    heading: '"porter-sans", serif',
    monospace: 'Menlo, monospace',
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
    round: '50px'
  },
  colors: {
    text: '#000',
    background: '#fff',
    background2: '#ffe7e7',
    background3: '#cefff3',
    backgroundGradient: 'linear-gradient(137deg, #12c6d9 5%, #ffc6fe 46%, #00ff8d 100%)',
    primary: '#000',
    onPrimary: '#fff',
    accent: '#F30000',
    secondary: '#0f3b06',
    muted: '#e4eef6',
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
      }
    }
  },
  forms: {
    label: {
      fontSize: 3,
      fontWeight: "semiBold",
      py: 2,
    },
    input: {
      outline: "none",
      borderRadius: "small",
      borderColor: "muted",
      color: "text",
      p: 2,
      "&:focus": {
        borderColor: "mutedAlt",
        color: "text",
      },
    },
    inputError: {
      variant: "forms.input",
      borderColor: "error",
      color: "text",
      "&:focus": {
        borderColor: "error",
        color: "text",
      },
    },
    textarea: { variant: "forms.input" },
    textareaError: { variant: "forms.inputError" },
    select: { variant: "forms.input" },
    slider: {
      height: "2px",
      borderRadius: "small",
      color: "text",
      "&:active, &:hover, &:focus": {
        color: "primary",
        bg: "primary",
        "&::-webkit-slider-thumb": {
          boxShadow: (theme) => theme.shadows.lightPrimary,
        },
      },
    },
    sliderActive: {
      variant: "forms.slider",
      color: "primary",
      bg: "primary",
    },
    radio: {
      color: "muted",
      "input:checked ~ &": {
        color: "primary",
      },
      "input:focus ~ &": {
        bg: "successMuted",
      },
    },
    checkbox: {
      color: "muted",
      "input:checked ~ &": {
        color: "primary",
      },
      "input:focus ~ &": {
        color: "primary",
        bg: "successMuted",
      },
    },
  },
  text: {
    text: {variant: 'styles.p', fontSize: 2},
    massive: {
      fontSize: 8
    },
    logo: {
      fontSize: 3
    }
  },

  buttons: {
    primary: {
      background: 'primary',
      fontSize: 2,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      borderRadius: '5px',
      color: 'onPrimary',
      py: 2,
      px: 4
    },
    text: {
      variant: 'buttons.primary',
      bg: 'transparent',
      textDecoration: 'underline',
      color: 'text'

    }
  },
  styles: {
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
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 4,
    },
    h3: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
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
      fontWeight: 600
    },
    a: {
      color: 'primary',
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
