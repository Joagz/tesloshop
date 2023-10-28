import type { AppProps } from 'next/app';
import { lightTheme } from '../../themes';
import '@/styles/globals.css';
import { ThemeProvider } from '@mui/material/styles';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
