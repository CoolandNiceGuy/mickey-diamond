import '@/styles/globals.css'
import Head from 'next/head'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function App({ Component, pageProps }) {
  return (
  <>
  <ThemeProvider theme={darkTheme}>
    <Head>
      <meta name='viewport' content="height=device-height, 
            width=device-width, initial-scale=1.0, 
            minimum-scale=1.0, maximum-scale=1.0, 
            user-scalable=no"
        />
    </Head>
    <CssBaseline />
    <Component {...pageProps} />
  </ThemeProvider>
  </>
  )
}
