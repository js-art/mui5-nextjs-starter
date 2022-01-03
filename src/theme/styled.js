
import customTheme from './theme'
import { createStyled, createTheme, style } from '@mui/system';

const defaultTheme = createTheme({
    ...customTheme
});

const styledc = createStyled({ defaultTheme });
export default styledc