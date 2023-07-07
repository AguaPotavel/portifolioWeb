import 'styled-components';

type ThemeColorProps = {
    accent: string,
      main: string,
      dark: string,
};

declare module 'styled-components' {
  export interface DefaultTheme {
     colors: {
        primary: ThemeColorProps,
        shape: ThemeColorProps,
        text: ThemeColorProps,
     };
    fonts: {
        primary: string,
    };
    sizes: {
        sm: string,
        md: string,
        lg: string,
    };
  }
}