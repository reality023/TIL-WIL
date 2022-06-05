import { Reset } from 'styled-reset';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Provider } from "react-redux";

import common from "./styles/common.scss";
import { defaultTheme } from "./styles/theme";
import Router from "./Router";
import store from "./redux/redux";

function App() {
  const theme = defaultTheme;
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Reset />
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </Provider>
  );
}

const GlobalStyle = createGlobalStyle`
  ${common};

  body, button, input, textarea {
    font-family: ${props => props.theme.fontFamily.default}, sans-serif;
    box-sizing: border-box;
    color: #444444;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default App;
