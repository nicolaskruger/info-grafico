import { DefaultTheme } from "styled-components";

declare module 'styled-components' {
    export interface DefaultTheme {
        Background: string,
        CurrentLine: string,
        Foreground: string,
        Comment: string,
        Cyan: string,
        Green: string,
        Orange: string,
        Pink: string,
        Purple: string,
        Red: string,
        Yellow: string,
    }
}

const theme: DefaultTheme = {
    Background: "#282a36",
    CurrentLine: "#44475a",
    Foreground: "#f8f8f2",
    Comment: "#6272a4",
    Cyan: "#8be9fd",
    Green: "#50fa7b",
    Orange: "#ffb86c",
    Pink: "#ff79c6",
    Purple: "#bd93f9",
    Red: "#ff5555",
    Yellow: "#f1fa8c",
}

export {
    theme
}