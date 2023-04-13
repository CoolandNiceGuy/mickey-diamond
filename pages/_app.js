// import '@/styles/globals.css'
import '../styles/globals.css'
import Head from 'next/head'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import createEmotionCache from '@/utility/createEmotionCache';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const clientSideEmotionCache = createEmotionCache();

export default function App({ Component, pageProps, emotionCache = clientSideEmotionCache }) {
  return (
  <>
  <CacheProvider value={emotionCache}>
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
  </CacheProvider>
  </>
  )
}
