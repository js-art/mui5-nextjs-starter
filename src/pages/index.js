import Layout from '@components/Layout'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import customTheme from '@theme';
import CButton from '@components/ButtonCustom/CButton';


export default function Home() {
  return (
    <>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <Layout>Hello my name is mosi
          <CButton variant="contained">سلام من مصطفی </CButton>
          {/* <Button variant="contained" color="success">سلام من مصطفی هستم</Button> */}
          <p>سلام من مصطفی هستم</p>
        </Layout>
      </ThemeProvider>
    </>
  )
}
