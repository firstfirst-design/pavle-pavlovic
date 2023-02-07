import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: 'DM Sans',

      styles: ['400'],
    },
  ],
  headerFontFamily: ['DM Sans', 'sans-serif'],
  bodyFontFamily: ['DM Sans', 'serif'],
});

export default typography;
