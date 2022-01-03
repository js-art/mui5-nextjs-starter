import { Button } from "@mui/material";
import { css } from "@mui/styled-engine";
import styledc from "@styled";



const CButton = styledc(Button)(({ theme }) => (css`
    font-family: ${theme.typography.fontFamily};
    letter-spacing: 0;
`));
export default CButton