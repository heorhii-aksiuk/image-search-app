import { createGlobalStyle } from 'styled-components';
import 'sanitize.css';
import 'sanitize.css/forms.css';
import 'sanitize.css/typography.css';
import 'react-toastify/dist/ReactToastify.min.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const GlobalStyle = createGlobalStyle`
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin-bottom: 0;
  margin-top: 0;
}

ul,
ol {
  margin-bottom: 0;
  margin-top: 0;
  padding-left: 0;
  list-style: none;
}

img {
  display: block;
  height: auto;
  max-width: 100%;
}

a {
  text-decoration: none;
}

body {
  background-color: ${(props) => props.theme.mainBackgroundColor};
}

html {

}
`;

export default GlobalStyle;
