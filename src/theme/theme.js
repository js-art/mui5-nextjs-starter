import { createTheme } from "@mui/material/styles";
import { gotham, samim } from './fonts'
import { css } from '@emotion/react'

const mode = 'dark'
const theme = createTheme({
    typography: {
        fontFamily: 'Samim,gotham',

    },
    palette: {
        primary: {
            main: '#8B74FF',
        },
        mode: 'dark',
        ...(
            mode === 'light' ?
                {
                    background: {
                        default: '#f5f5f5'
                    }
                }
                :
                {
                    background: {
                        default: '#1B1829'
                    }
                }
        ),

    },
    components: {
        MuiCssBaseline: {
            styleOverrides: css`
                ${gotham}
                ${samim}

                body{
                    font-size: 45px;
                }
            `,
        },
        // MuiButton: {
        //     styleOverrides: {
        //         root: {
        //             fontFamily: theme => theme.typography.fontFamily,
        //             letterSpacing: 0,
        //             fontSize: '3rem'
        //         }
        //     }
        // }
    },

});
// export const styled = createStyled({ customTheme });
export default theme