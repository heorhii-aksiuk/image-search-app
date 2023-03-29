import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    accentColor: string;
    buttonHoverColor: string;
    buttonActiveColor: string;
    transition: string;
    appBarBoxShadow: string;
    itemBoxShadow: string;
    buttonBoxShadow: string;
    loaderColor: string;
    mainTextColor: string;
    secondaryTextColor: string;
    mainBackgroundColor: string;
    secondaryBackgroundColor: string;
  }
}
