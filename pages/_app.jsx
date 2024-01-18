import { ToastContainer } from 'react-toastify';
import AppProvider from '../context/AppContext';
import SEO from '../components/seo';
import '../styles/index.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SEO font={'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;900&family=Rubik:wght@300;400;500;600;700;900&display=swap'} />
      <AppProvider>
        <Component {...pageProps} />
        <ToastContainer />
      </AppProvider>
    </>
  );
}

export default MyApp;
