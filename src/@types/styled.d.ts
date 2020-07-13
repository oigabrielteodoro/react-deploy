import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      error: string;
      warning: string;
      success: string;

      background: string;
      backgroundSecundary: string;

      text: string;
      muted: string;
    };
  }
}
