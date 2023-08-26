import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  brandTitle: 'The Shit UI',
  brandUrl: 'https://thelifeshit.com',
  brandImage: 'https://thelifeshit.com/assets/svgs/logo.svg',
  brandTarget: '_self',

  //
  colorPrimary: '#D7D1C1',
  colorSecondary: '#BFB69B',

  // UI
  appBg: '#ECE9E1',
  appContentBg: '#FAF9F7',
  appBorderColor: '#D7D1C1',
  appBorderRadius: 4,

  // Boolean
  booleanBg: "#ECE9E1",
  booleanSelectedBg: "#D7D1C1",

  // Button
  buttonBg: "#F7F6F3",
  buttonBorder: "#F7F6F3",

  // Text colors
  textColor: '#000000',
  textInverseColor: '#fffafa',
  // textMutedColor: "#F7F6F3",

  // Toolbar default and active colors
  barTextColor: '#fffafa',
  barSelectedColor: '#F7F6F3',
  barBg: '#D7D1C1',

  // Form colors
  // gridCellSize: undefined,

  // Form colors
  inputBg: '#fffafa',
  inputBorder: '#BFB69B',
  inputTextColor: '#BFB69B',
  inputBorderRadius: 4,
});