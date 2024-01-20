import { createRoot } from "react-dom/client";
import App from "./app/App";
import { StoreProvider } from "./app/providers/StoreProvider/ui/StoreProvider";

import { createGlobalStyle } from 'styled-components'
import { CustomThemeProvider } from "./app/providers/ThemeProvider/ui/ThemeProvider";

const Global = createGlobalStyle`
    * {
    @font-face {
        font-family: 'Ubuntu';
        src: url('https://fonts.googleapis.com/css2?family=Heebo:wght@100&display=swap') format('woff2');
    }

    margin: 0;
    padding: 0;
    color: ${props => props.theme.colors.text};
    box-sizing: border-box;
    font-family: 'Ubuntu', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    
    body {
        background-color: ${props => props.theme.colors.bg || 'black'};
    }
}`

const root = document.getElementById('root')

if (!root) {
    throw new Error('root not found')
}

const container = createRoot(root)

container.render(
    <CustomThemeProvider>
        <StoreProvider>
            <Global />
            <App />
        </StoreProvider>
    </CustomThemeProvider>
)