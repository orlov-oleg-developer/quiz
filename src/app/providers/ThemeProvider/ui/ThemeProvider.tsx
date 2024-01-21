import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

interface ThemeProviderProps {
    children?: ReactNode;
}

const theme = {
    colors: {
        text: '#CDCDCD',
        bg: '#010101',
        block: '#161616',
        buttonText: 'black',
        success: '#6DB95A',
        error: '#DD5E5E',
    },
    media: {
        phone: "(max-width: 425px)",
        tablet: "(max-width: 768px) and (min-width: 425px)",
    }
}

export const CustomThemeProvider = ({
    children
}: ThemeProviderProps) => {

    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
};
